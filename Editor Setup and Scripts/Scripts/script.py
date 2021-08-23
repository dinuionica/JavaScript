import subprocess
from subprocess import call
def script():
    # install all extension for web development
    result_call = call("./script.sh", shell=True)

if __name__ == '__main__':
    script();
