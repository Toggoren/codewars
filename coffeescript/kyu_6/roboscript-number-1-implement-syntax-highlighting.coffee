###
https://www.codewars.com/kata/58708934a44cfccca60000c4/train/coffeescript
###

SYNTAX_HIGHLIGHT =
  'F': 'pink',
  'R': 'green',
  'L': 'red',
  '\\d': 'orange',


highlight_syntax = (code, syntax) ->
  regex = new RegExp """(#{syntax}+)""", 'g'
  color = SYNTAX_HIGHLIGHT[syntax]
  code.replace regex, """<span style="color: #{color}">$1</span>"""


highlight = (code) ->
  Object.keys(SYNTAX_HIGHLIGHT).reduce ((char, syntax) ->
    highlight_syntax char, syntax
  ), code
