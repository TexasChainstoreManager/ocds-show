from jinja2 import Environment, FileSystemLoader
from flask import Flask
import imp
import json
from tempfile import NamedTemporaryFile
import os

app = Flask(__name__)


def convert_jsonp_to_json(jsonp_file, json_file):
    """ Convert a JSONP file of the format:
    example_release = /* JS object representing release */
    into a valid JSON file

    @param jsonp_file - path of JSONP file
    @param json_file - path of JSON file
    """
    with open(jsonp_file) as f:
        jsonp_contents = f.read()

    temp_file = NamedTemporaryFile(delete=False)
    temp_file.write('null = None\nfalse = False\n' + jsonp_contents)
    temp_file.close()

    jsonp = imp.load_source('jsonp', temp_file.name)

    with open(json_file, 'w+') as f:
        f.write(json.dumps(jsonp.example_release, indent=4))

    os.unlink(temp_file.name)


def load_json(json_file):
    """Load a JSON file as a Python object

    @param json_file - relative path of file containing valid JSON
    @return Python object
    """
    with open(json_file) as f:
        json_obj = f.read()
    return json.loads(json_obj)


@app.route('/<release_file>')
def serve_release(release_file):
    env = Environment()
    env.loader = FileSystemLoader('templates')

    # Converts currencies e.g. 1000000.0000 -> 1,000,000.00
    env.filters['currency'] = lambda n: '{0:,.2f}'.format(n)
    env.filters['gettext'] = lambda text: text

    templ = env.get_template('base_html.html')
    return templ.render(load_json('release_json/{0}'.format(release_file)))


if __name__ == "__main__":
    app.run()
