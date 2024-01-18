import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
  const [name, setName]= useState('')
  const [email,setEmail]=useState('')
  return (
    <Container py={'16'} minH={'90vh'}>
    <form>
     <Heading textTransform={'uppercase'}
         children={'Update Profile'}
         my={'16'}
         textAlign={'center'}
     />
     <VStack textAlign={['center','left']}>
     <Input
               value={name}
               onChange={e => setName(e.target.value)}
               placeholder="Please enter your name"
               type="text"
               focusBorderColor="red.500"
             />
         
     <Input
               value={email}
               onChange={e => setEmail(e.target.value)}
               placeholder="Please enter your email"
               type="text"
               focusBorderColor="red.500"
             />
         
             <Button w={'full'} colorScheme='red' type='submit' >Update</Button>
     </VStack>
    </form>
 
    </Container>
  )
}

export default UpdateProfile