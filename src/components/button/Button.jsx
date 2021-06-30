import MyButton from './styles'

const Button = ({children, setColor, setSize, click, setFontColor}) => {

    return(
      <MyButton 
          setColor={setColor}
          onClick={click}
          setSize={setSize}
          setFontColor={setFontColor}
        >{children}
      </MyButton>
    )
}

export default Button