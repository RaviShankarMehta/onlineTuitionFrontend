import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
const [oldPassword,setOldPassword] = useState('')
const [newPassword,setNewPassword]= useState('')

  return (
   <Container py={'16'} minH={'90vh'}>
   <form>
    <Heading textTransform={'uppercase'}
        children={'Change Password'}
        my={'16'}
        textAlign={'center'}
    />
    <VStack textAlign={['center','left']}>
    <Input
              required
              id="password"
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
              placeholder="Please enter old password"
              type="password"
              focusBorderColor="red.500"
            />
               <Input
              required
              id="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="Please enter new password"
              type="password"
              focusBorderColor="red.500"
            />
            <Button w={'full'} colorScheme='red' type='submit' >Change</Button>
    </VStack>
   </form>

   </Container>
  )
}

export default ChangePassword