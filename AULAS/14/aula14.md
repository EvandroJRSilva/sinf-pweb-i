# Aula 14 - Primeiros passos com Django

**Atenção!**

Todos os comandos de `shell`/`CLI` mostrados neste material são as versões para uso no **Linux**. Caso esteja no Windows, verifique, nos links fornecidos, os comandos equivalentes.

---

Sumário

- [Aula 14 - Primeiros passos com Django](#aula-14---primeiros-passos-com-django)
  - [Criando um projeto](#criando-um-projeto)
    - [Configurações do projeto](#configurações-do-projeto)
  - [Criando uma aplicação](#criando-uma-aplicação)
    - [Criando uma `view`](#criando-uma-view)
    - [Criando `models`](#criando-models)

---

Vamos seguir o tutorial [adaptado]:

- [Parte 1](https://docs.djangoproject.com/en/5.2/intro/tutorial01/).
- [Parte 2](https://docs.djangoproject.com/en/5.2/intro/tutorial02/).

## Criando um projeto

Para se criar um projeto basta executar o seguinte comando no diretório pretendido:

```shell
$ django-admin startproject <nome-do-projeto> <nome-do-diretorio>
```

Este comando criará um projeto chamado `<nome-do-projeto>` dentro de `<nome-do-diretorio>`. O Django criará automaticamente alguns arquivos e diretórios, e você verá a seguinte estrutura:

```
<nome-do-diretorio>
    ├─ manage.py
    └─ <nome-do-projeto>
        ├─ __init__.py
        ├─ settings.py
        ├─ urls.py
        ├─ asgi.py
        └─ wsgi.py
```

- [`manage.py`](https://docs.djangoproject.com/en/5.2/ref/django-admin/): utilitário de linha de comando que permite a interação com o projeto em Django, de várias formas.
- `<nome-do-projeto>/`: diretório/pasta que corresponde ao pacote Python do projeto. Esse nome é o mesmo que será usado para `import`s feitos em outros arquivos.
- `<nome-do-projeto>/__init__.py`: arquivo em branco que diz ao Python que esse diretório deve ser considerado um pacote Python.
- `<nome-do-projeto>/settings.py`: configuração para o projeto. [Django settings](https://docs.djangoproject.com/en/5.2/topics/settings/) é o que vai dizer como as configurações devem funcionar.
- `<nome-do-projeto>/urls.py`: as declarações de URL para este projeto; um "sumário" do site que está sendo construído. É possível ler mais sobre URLs em [URL dispatcher](https://docs.djangoproject.com/en/5.2/topics/http/urls/).
- `<nome-do-projeto>/asgi.py`: um ponto de entrada para servidores web compatíveis com ASGI para servir ao projeto. Para mais detalhes veja [como fazer deploy com ASGI](https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/).
- `<nome-do-projeto>/wsgi.py`: um ponto de entrada para servidores web compatíveis com WSGI para servir ao projeto. Para mais detalhes veja [como fazer deploy com WSGI](https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/).

Uma vez com um projeto criado é possível rodar um servidor de desenvolvimento, leve, escrito puramente em Python e com o objetivo de ser usado para testes locais. Para rodar o servidor:

``` shell
$ python manage.py runserver
```

Documentação de [runserver](https://docs.djangoproject.com/en/5.2/ref/django-admin/#django-admin-runserver).

### Configurações do projeto

Vamos dar uma olhada no arquivo `<nome-do-projeto>/settings.py`. Trata-se de um módulo Python com as configurações do Django para um projeto.

Na linha 33 podemos encontrar [`INSTALLED_APPS`](https://docs.djangoproject.com/en/5.2/ref/settings/#std-setting-INSTALLED_APPS), o qual contém os seguintes apps (todos vindos com o Django):

- [`django.contrib.admin`](https://docs.djangoproject.com/en/5.2/ref/contrib/admin/#module-django.contrib.admin): o site de administração.
- [`django.contrib.auth`](https://docs.djangoproject.com/en/5.2/topics/auth/#module-django.contrib.auth): um sistema de autenticação.
- [`django.contrib.contenttypes`](https://docs.djangoproject.com/en/5.2/ref/contrib/contenttypes/#module-django.contrib.contenttypes): um framework para tipos de conteúdo.
- [`django.contrib.sessions`](https://docs.djangoproject.com/en/5.2/topics/http/sessions/#module-django.contrib.sessions): um framework de sessões.
- [`django.contrib.messages`](https://docs.djangoproject.com/en/5.2/ref/contrib/messages/#module-django.contrib.messages): um framework de mensagens.
- [`django.contrib.staticfiles`](https://docs.djangoproject.com/en/5.2/ref/contrib/staticfiles/#module-django.contrib.staticfiles): um framework para gerenciar arquivos estáticos.

A seguir, na linha 75 vemos a configuração [`DATABASES`](https://docs.djangoproject.com/en/5.2/ref/settings/#std-setting-DATABASES). Por padrão ela usa o SQLite. Caso seja necessário, é possível alterar para outro banco. No nosso caso, vamos manter o SQLite.

Se formos para a linha 107 encontraremos o seguinte:

```python
TIME_ZONE = 'UTC'
```

O Django configura o UTC por padrão, mas podemos alternar a zona para a nossa:

```python
TIME_ZONE = 'America/Fortaleza'
```

Voltando às aplicações em `INSTALLED_APPS`, algumas delas fazem uso de pelo menos uma tabela no banco de dados. Para usar essas tabelas é preciso criá-las, e isso é feito com o seguinte comando:

```shell
$ python manage.py migrate
```

O comando `migrate` verifica a configuração `INSTALLED_APPS` e cria todas as tabelas necessárias de acordo com o arquivo de configuração `settings.py` do projeto.

## Criando uma aplicação

Cada aplicação (**app**) escrita com Django consiste em um pacote Python que segue uma certa convenção. O Django gera a estrutura básica de diretórios automaticamente.

**Diferença entre um projeto e um app**: 

- Um app é uma aplicação web que faz alguma coisa, por exemplo, um sistema de blog, ou um banco de dados de registros públicos.
- Um projeto é uma coleção de configurações e apps para um site em específico. Um projeto pode contar múltiplos apps. E um app pode estar em múltiplos projetos.

Para criar um app o seguinte comando deve ser executado no mesmo diretório onde está o `manage.py`:

```shell
$ python manage.py startapp <nome-do-app>
```

A estrutura do app criado será a seguinte:

```
<nome-do-app>
    ├─ __init__.py
    ├─ admin.py
    ├─ apps.py
    ├─ migrations
    |   └─ __init__.py
    ├─ models.py
    ├─ tests.py
    └─ views.py
```

Por enquanto só precisamos conhecer dois desses componentes: 

- `models.py` é o arquivo onde iremos criar nossas classes, já pensando em como os objetos serão armazenados no banco de dados. Aqui também implementamos as regras de negócio.
- `views.py` é o arquivo onde iremos criar e configurar as `views`, ou seja, a parte gráfica da aplicação.

Para seguirmos o tutorial com mais facilidade, vamos criar nosso projeto e aplicação:

```shell
$ django-admin startproject meusite exemplo-django
$ python manage.py startapp pesquisa
```

### Criando uma `view`

Agora vamos criar nossa primeira `view` em `pesquisa/views.py`. O arquivo estará da seguinte forma

```python
from django.shortcuts import render

# Create your views here.
```

Após a nossa modificação, ele ficará assim:

```python
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Olá! Você está na página principal da aplicação Pesquisa.")
```

Para poder acessar essa `view` em um navegador é preciso mapeá-la para uma URL. E para fazer esse mapeamento é preciso definir uma configuração de URL. Essa configuração no Django é definida em um arquivo chamado `urls.py`.

Entretanto, não temos esse arquivo na aplicação. Portanto vamos criar uma e inserir o código a seguir:

```python
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index")
]
```

O diretório da aplicação agora deverá estar assim:

```
pesquisa
    ├─ __init__.py
    ├─ admin.py
    ├─ apps.py
    ├─ migrations
    |   └─ __init__.py
    ├─ models.py
    ├─ tests.py
    ├─ urls.py
    └─ views.py
```

O próximo passo é incluir a configuração de URL da aplicação no projeto. Neste momento o arquivo `meusite/urls.py` está assim:

```python
"""
URL configuration for meusite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

A inclusão da configuração é feita após a importação e utilização de `include`, e o arquivo de configuração. Com as alterações o arquivo deverá ficar assim:

```python
"""
URL configuration for meusite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('pesquisa/', include('pesquisa.urls')),
]
```

A função `path()` requer pelo menos dois argumentos: `rota` e `view`. A função `include()` permite referenciar outras configurações de URL.

Podemos ver se configuramos corretamente rodando o servidor:

```shell
$ python manage.py runserver
```

Com o servidor rodando, visitamos o endereço `http://localhost:8000/pesquisa/`.

### Criando `models`

Complementando o que foi dito anteriormente, um `model` contém os campos e comportamentos dos dados a serem armazenados. Neste momento o arquivo estará assim:

```python
from django.db import models

# Create your models here.
```

Vamos acrescentar duas classes: `Pergunta` e `Alternativa`.

```python
from django.db import models

class Pergunta(models.Model):
    pergunta_texto = models.CharField(max_length=200)
    data_pub = models.DateTimeField("data de publicação")

class Alternativa(models.Model):
    pergunta = models.ForeignKey(Pergunta, on_delete=models.CASCADE)
    alternativa_texto = models.CharField(max_length=200)
    votos = models.IntegerField(default=0)
```

Perceba que cada `model` é representada por uma classe, a qual é subclasse de `django.db.models.Model`. Cada `model` tem um número de campos/variáveis de classe, cada qual representando um atributo/coluna no banco de dados.

A partir dessa classe o Django pode criar novas tabelas no banco de dados e acessá-las. Para isso é necessário informar ao projeto que a aplicação **pesquisa** está instalada.

Para incluir a aplicação no projeto é necessário adicionar uma referência à sua classe de configuração em `INSTALLED_APPS`. Essa classe de configuração fica no arquivo `apps.py`, e tem o seguinte nome: `PesquisaConfig`.

Então, agora vamos ao arquivo `meusite/settings.py` e adicionar à configuração `INSTALLED_APPS` a classe `PesquisaConfig`. No momento está assim:

```python
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

Com o acréscimo da nossa aplicação deverá ficar assim:

```python
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'pesquisa.apps.PesquisaConfig',
]
```

Agora precisamos informar ao Django que foram feitas alterações nas `models`. O comando para isso é:

```shell
$ python manage.py makemigrations pesquisa
```

O comando `makemigrations` é o responsável por dizer ao Django que houve modificações. Essas modificações ficarão armazenadas como `migrações` (*migrations*). Com as modificações prontas para serem executadas, rodamos o seguinte comando:

```shell
$ python manage.py migrate
```

Se você quiser ver o código SQL que será executado para a criação dessas novas tabelas execute:

```shell
$ python manage.py sqlmigrate pesquisa 0001
```

TODO: continuar de https://docs.djangoproject.com/en/5.2/intro/tutorial02/#playing-with-the-api