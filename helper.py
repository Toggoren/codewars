#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import enum
import os
import pathlib
from urllib.parse import urlparse

import requests


@enum.unique
class Language(enum.Enum):
    Agda = enum.auto()
    BrainFuck = enum.auto()
    C = enum.auto()
    CFML = enum.auto()
    Clojure = enum.auto()
    Cobol = enum.auto()
    CoffeeScript = enum.auto()
    CommonLisp = enum.auto()
    Coq = enum.auto()
    Cpp = enum.auto()
    Crystal = enum.auto()
    CSharp = enum.auto()
    Dart = enum.auto()
    Elixir = enum.auto()
    Elm = enum.auto()
    Erlang = enum.auto()
    Factor = enum.auto()
    Forth = enum.auto()
    Fortran = enum.auto()
    FSharp = enum.auto()
    Go = enum.auto()
    Groovy = enum.auto()
    Haskell = enum.auto()
    Haxe = enum.auto()
    Idris = enum.auto()
    Java = enum.auto()
    JavaScript = enum.auto()
    Julia = enum.auto()
    Kotlin = enum.auto()
    Lean = enum.auto()
    Lua = enum.auto()
    NASM = enum.auto()
    Nim = enum.auto()
    ObjC = enum.auto()
    OCaml = enum.auto()
    Pascal = enum.auto()
    Perl = enum.auto()
    PHP = enum.auto()
    PowerShell = enum.auto()
    Prolog = enum.auto()
    PureScript = enum.auto()
    Python = enum.auto()
    R = enum.auto()
    Racket = enum.auto()
    Raku = enum.auto()
    Reason = enum.auto()
    Ruby = enum.auto()
    Rust = enum.auto()
    Scala = enum.auto()
    Shell = enum.auto()
    Solidity = enum.auto()
    SQL = enum.auto()
    Swift = enum.auto()
    TypeScript = enum.auto()
    VisualBasic = enum.auto()


language_str2Language = {
    'javascript': Language.JavaScript,
    'coffeescript': Language.CoffeeScript,
    'ruby': Language.Ruby,
    'python': Language.Python,
    'haskell': Language.Haskell,
    'clojure': Language.Clojure,
    'java': Language.Java,
    'csharp': Language.CSharp,
    'elixir': Language.Elixir,
    'cpp': Language.Cpp,
    'typescript': Language.TypeScript,
    'php': Language.PHP,
    'crystal': Language.Crystal,
    'dart': Language.Dart,
    'rust': Language.Rust,
    'fsharp': Language.FSharp,
    'swift': Language.Swift,
    'go': Language.Go,
    'shell': Language.Shell,
    'c': Language.C,
    'lua': Language.Lua,
    'sql': Language.SQL,
    'bf': Language.BrainFuck,
    'r': Language.R,
    'nim': Language.Nim,
    'erlang': Language.Erlang,
    'objc': Language.ObjC,
    'scala': Language.Scala,
    'kotlin': Language.Kotlin,
    'solidity': Language.Solidity,
    'groovy': Language.Groovy,
    'fortran': Language.Fortran,
    'nasm': Language.NASM,
    'julia': Language.Julia,
    'powershell': Language.PowerShell,
    'purescript': Language.PureScript,
    'elm': Language.Elm,
    'ocaml': Language.OCaml,
    'reason': Language.Reason,
    'idris': Language.Idris,
    'racket': Language.Racket,
    'agda': Language.Agda,
    'coq': Language.Coq,
    'vb': Language.VisualBasic,
    'forth': Language.Forth,
    'factor': Language.Factor,
    'prolog': Language.Prolog,
    'cfml': Language.CFML,
    'lean': Language.Lean,
    'cobol': Language.Cobol,
    'haxe': Language.Haxe,
    'commonlisp': Language.CommonLisp,
    'raku': Language.Raku,
    'perl': Language.Perl,
    'pascal': Language.Pascal,
}

language_str2language_pretty_str = {
    k: f'{v}'.split('.')[-1] for k, v in language_str2Language.items()
}


def language2file_ext(language: Language) -> str:
    assert isinstance(language, Language), f'{language=} type of "{type(language)}"'

    def not_implemented_language():
        raise NotImplementedError(f'{language=}')

    result = {
        Language.CoffeeScript: '.coffee',
        Language.Cpp: '.cpp',
        Language.JavaScript: '.js',
        Language.PHP: '.php',
        Language.Python: '.py',
        Language.Go: '.go',
    }.get(language, not_implemented_language)

    return result if isinstance(result, str) else result()


def file_template_based_by_language(language: Language) -> str:
    assert isinstance(language, Language), f'{language=} type of "{type(language)}"'

    def not_implemented_language():
        raise NotImplementedError(f'{language=}')

    def python_template():
        return '#!/usr/bin/env python3\n' \
               '# -*- coding: utf-8 -*-\n' \
               '\n' \
               '# {text}\n' \
               '\n' \
               '# START HERE\n' \
               '\n'

    def php_template():
        return '<?php\n' \
               '\n' \
               '// {text}\n' \
               '\n' \
               '// START HERE\n' \
               '\n'

    def coffeescript_template():
        return '###\n' \
               '{text}\n' \
               '###\n' \
               '\n' \
               '# START HERE\n' \
               '\n'

    def cpp_template():
        return '/*\n' \
               '* {text}\n' \
               '*/\n' \
               '\n' \
               '// START HERE\n' \
               '\n'

    def javascript_template():
        return '/*\n' \
               ' {text}\n' \
               '*/\n' \
               '\n' \
               '// START HERE\n' \
               '\n'

    def go_template():
        return '// Package kata {text}\n' \
               'package kata\n' \
               '\n' \
               '// START HERE\n' \
               '\n'

    return {
        Language.CoffeeScript: coffeescript_template,
        Language.Cpp: cpp_template,
        Language.JavaScript: javascript_template,
        Language.PHP: php_template,
        Language.Python: python_template,
        Language.Go: go_template,
    }.get(language, not_implemented_language)()


def main():
    parser = argparse.ArgumentParser()

    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('-n', '--new-task', action='store')
    group.add_argument('-d', '--done', action='store_true')

    args = parser.parse_args()

    if args.done:
        with open(file='README.md', mode='r', encoding='utf-8') as fh_in:
            data = fh_in.read().splitlines(keepends=True)
        tmp_str = ''
        for line in reversed(data):
            if line.startswith('* rank'):
                tmp_str = line
                break
        assert tmp_str != '', f'{tmp_str=}'
        _, _, rank, _, _, language, _, task_name, _ = tmp_str.strip().split('``')
        os.system(f'git add .')
        os.system(f'git commitutc -m "Add {language}::{rank}::{task_name}"')
        os.system(f'git push origin master')
        exit(0)

    url = args.new_task

    o = urlparse(url)
    assert o.netloc == 'www.codewars.com' or o.netloc == 'codewars.com', f'{o.netloc=}'
    path = [x for x in o.path.split('/') if x]

    challenge_id = path[1]
    assert len(challenge_id) == 24, f'{path=} {challenge_id=}'

    language_str = path[3]
    assert language_str in language_str2Language.keys(), f'{language_str=}'

    req = requests.get(f'https://www.codewars.com/api/v1/code-challenges/{challenge_id}')
    assert req.status_code == 200, f'{req.status_code=}'

    data = req.json()

    assert 'languages' in data, f'{data=}'
    assert language_str in data['languages'], f'{language_str=}'
    language = language_str2Language[language_str]

    assert 'rank' in data, f'{data=}'
    assert 'id' in data['rank'], f'{data["rank"]=}'
    assert isinstance(data['rank']['id'], int) or data['rank']['id'] is None, (
        f'{data["rank"]["id"]=} type of {type(data["rank"]["id"])}', f'{req.url=}')
    rank = 'beta' if data['rank']['id'] is None else str(abs(data['rank']['id']))

    assert 'slug' in data, f'{data=}'
    slug = data['slug']

    path = pathlib.Path.cwd() / f'{language_str}' / (f'kyu_{rank}' if rank != 'beta' else f'{rank}')
    path.mkdir(exist_ok=True, parents=True)
    file_ext = language2file_ext(language)
    filename = path / f'{slug}{file_ext}'
    if filename.exists():
        raise FileExistsError(filename)
    with open(file=f'{filename}', mode='w', encoding='utf-8') as fh_out:
        fh_out.write(f'{file_template_based_by_language(language).format(text=url)}')
        fh_out.flush()

    with open(file='README.md', mode='r', encoding='utf-8') as fh_in:
        old_data = fh_in.read().splitlines(keepends=True)

    assert 'name' in data, f'{data=}'
    name = data['name']
    assert 'url' in data, f'{data=}'
    url = data['url']

    rank_fmt = f'``{rank} kyu``' if rank != 'beta' else rank
    language = language_str2language_pretty_str[language_str]
    rel_path = pathlib.Path(*filename.parts[len(pathlib.Path.cwd().parts):])
    new_part = f'* rank: ``{rank_fmt}`` language: ``{language}`` task name: ``{name}``  \n' \
               f'    [``go to description``]({url}) [``go to solution``]({rel_path}) \n'

    old_data.insert(len(old_data) - 1, new_part)

    with open(file='README.md', mode='w', encoding='utf-8') as fh_out:
        fh_out.write(''.join(old_data))
        fh_out.flush()


if __name__ == '__main__':
    main()
