import json
import os
import subprocess

TAG_PREFIX = '192.168.1.24'

curDir = os.getcwd()

print('##############开始部署##############')
print('当前目录：{},标签前缀：{}'.format(curDir, TAG_PREFIX))
print('###################################')
# load rush.json 
with open('rush.json') as f:
    projects = json.load(f)['projects']
    for projects in projects:
        # change directory
        os.chdir(curDir)
        os.chdir(projects['projectFolder'])
        # is exist Dockerfile
        if not os.path.exists('Dockerfile'):
            print('项目：{} 不存在Dockerfile文件,因此默认此项目不需要部署'.format(projects['packageName']))
            continue
        # load package.json
        with open('package.json') as f:
            package = json.load(f)
            # get image name
            name = package['name']
            # get image version
            version = package['version']
            # get image tag
            author = package['author']
            tag = TAG_PREFIX + '/'+author+'/' + name + ':' + version
            iamge_name = TAG_PREFIX + '/'+author+'/' + name
            # build image
            print('############# 正在构建镜像: {} ###############'.format(tag))
            result = subprocess.run(['docker','build','-t',tag,'--no-cache','.' ], stdout=subprocess.PIPE)
            print(result.stdout.decode('utf-8'))
            print('############# 镜像: {} 构建结束 ###############'.format(tag))
            print('############# 开始推送镜像: {} ###############'.format(tag))
            result = subprocess.run(['docker','push',tag], stdout=subprocess.PIPE)
            print(result.stdout.decode('utf-8'))
            print('############# 镜像: {} 推送结束 ###############'.format(tag))
            
print('##############部署结束##############')
print('################# 清理tag为none的镜像 ##################')
result = subprocess.run(['docker','image','prune','-f'], stdout=subprocess.PIPE)
print(result.stdout.decode('utf-8'))
print('################# 清理结束 ##################')