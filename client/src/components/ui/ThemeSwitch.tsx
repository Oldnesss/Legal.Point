import { Switch, useColorMode } from '@chakra-ui/react'
import React from 'react'

function ThemeSwitch(): JSX.Element {
  const { colorMode, toggleColorMode} = useColorMode()
  return (
    <div className="mr-5">
      <Switch
        colorScheme="teal"
        onChange={() => toggleColorMode()}
        isChecked={colorMode === 'light'}
      />
    </div>

)
  }
export default ThemeSwitch