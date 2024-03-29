import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    pyodideIndexUrl: 'https://cdn.jsdelivr.net/pyodide/v0.21.0/full/',
    githubProjectUrl: 'https://github.com/ryanking13/black-playground-pyodide',
    blackWheel: 'black-21.10b1.dev16+gb3f3678-py3-none-any.whl',
    placeholderCode: `# Black Playground powered by Pyodide!
from pyodide import hello, Pyodide

x = {  'a':37,'b':42,

'c':927}

x = 123456789.123456789E123456789

if very_long_variable_name is not None and \
    very_long_variable_name.field > 0:
    z = 'hello '+'world'
else:
    world = 'world'
    a = 'hello {}'.format(world)
    f = rf'hello {world}'
if (this
and that): y = 'hello ''world'#FIXME: https://github.com/psf/black/issues/26
class Foo  (     object  ):
    def f    (self   ):
     return       37*-2
    def g(self, x,y=42):
        return y
def f  (   a: List[ int ]) :
    return      37-a[42-u :  y**3]
def very_important_function(template: str,*variables,file: os.PathLike,debug:bool=False,):
    """Applies \`variables\` to the \`template\` and writes to \`file\`."""
    with open(file, "w") as f:
        ...
# fmt: off
custom_formatting = [
    0,  1,  2,
    3,  4,  5,
    6,  7,  8,
]
# fmt: on
regular_formatting = [
    0,  1,  2,
    3,  4,  5,
    6,  7,  8,
]
`,
  },
});

export default app;
