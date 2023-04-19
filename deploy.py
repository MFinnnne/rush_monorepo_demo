import json
import os
import subprocess

## 配置 docker 地址
DOCKER_REGISTRY = '192.68.1.24:80'

shouldDeploy = []
# load file
with open('rush.json') as f:
    pkg = json.load(f)
    projects = pkg['projects']
    for project in projects:
      # print(project)
      if project["projectFolder"].startswith("app") or project["projectFolder"].startswith("doc"):
          shouldDeploy.append({'projectName': project["packageName"],'path': project["projectFolder"]})

# 获取当前工作目录
current_dir = os.getcwd()

for deploy in shouldDeploy:
    # change directory
    os.chdir(deploy['path'])
    # load packages.json
    with open('package.json') as f:
      # parse json
      pkg = json.load(f)
      # get version
      version = pkg['version']
      # get author
      author = pkg['author']
      # 获取项目名称
      name = pkg['name']
      # 是否存在 dist目录
      if not os.path.exists('dist'):
        print('dist not exists')
      else:
        # 执行命令行
        result = subprocess.run(['docker build -t ' +DOCKER_REGISTRY+'/'+author+ name + '/' + version + ' .'], stdout=subprocess.PIPE)
        print(result.stdout.decode('utf-8'))
