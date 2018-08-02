const babel = require('babel-core')

const input = `
class Foo {

}

class Counter extends Component {
  state = {
    bar: 'foo'
  }

  componentDidMount() {
    console.log(this.state.bar)
  }
}
`

const { code } = babel.transform(input, {
  plugins: ['syntax-class-properties', 'syntax-object-rest-spread', 'syntax-jsx', require.resolve('..')]
})

console.log(input)
console.log('⇣⇣⇣')
console.log(code)
