from jinja2 import Environment, FileSystemLoader
from flask import Flask
import imp
from pprint import pprint

app = Flask(__name__)


@app.route('/')
def root():
    release_json = imp.load_source('release_json', 'example/release.json')
    env = Environment()
    env.loader = FileSystemLoader('templates')

    # Converts currencies e.g. 1000000.0000 -> 1,000,000.00
    env.filters['currency'] = lambda n: '{0:,.2f}'.format(n)
    env.filters['gettext'] = lambda text: text

    templ = env.get_template('base_html.html')
    return templ.render(release_json.example_release)


if __name__ == "__main__":
    app.run()
