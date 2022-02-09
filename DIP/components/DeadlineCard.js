import React from "react";
import { Pressable, Text, Box, HStack, VStack, Spacer, Flex, Badge, Center, NativeBaseProvider, Divider, IconButton, Icon, Popover, Button } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function DeadlineCard() {
    return (
      <Box alignItems="center">
        <Pressable onPress={() => console.log("Deadline Details")}>
          <Box width="350px" borderWidth="1" borderColor="#CA9481" shadow="3" bg="#CA9481" p="5" rounded="8">
            <HStack>
              <Icon as={Entypo} name="dot-single" size="5" color="#FFEBE3" ml="-12px" mt="-12px"/>
              <Spacer/>
              <Icon as={Entypo} name="dot-single" size="5" color="#FFEBE3" mr="-12px" mt="-12px"/>
            </HStack>
            <HStack alignItems="center">
              <Badge 
                bg="#FFEBE3"
                shadow="0"
                _text={{color: "#2C2E32", fontSize: "14px", fontWeight: "bold"}} 
                variant="solid" 
                rounded="4">
                      DEADLINE
              </Badge>
              <Spacer/>
              <Popover trigger={triggerProps => {
                return(
                  <IconButton 
                    {...triggerProps}
                    icon={<Icon as={Entypo} name="edit" />} 
                    borderRadius="full" 
                    _icon={{
                      color: "#FFEBE3",
                      size: "5",
                    }} 
                    _hover={{
                      bg: "#FFEBE3:alpha.20"
                    }} 
                    _pressed={{
                      bg: "#FFEBE3",
                      _icon: {
                        name: "edit",
                        color: "#2C2E32"
                      },
                    }}
                  />
                )          
              }}>
                <Popover.Content accessibilityLabel="Edit" w="100%">
                  <Popover.Footer justifyContent="center">
                    <Button.Group space={2}>
                      <Button colorScheme="coolGray" variant="ghost">
                        Cancel
                      </Button>
                      <Button 
                        bg="#CA9481"
                        _pressed={{
                          bg: "#FFEBE3",
                        }} 
                      >
                        Edit
                      </Button>
                      <Button                    
                        bg="#CA9481"
                        _pressed={{
                          bg: "#FFEBE3",
                        }} 
                      >
                        Delete
                      </Button>
                    </Button.Group>
                  </Popover.Footer>
                </Popover.Content>
              </Popover>
            </HStack>
            <Divider bg="#F0EDE9" thickness="2" my="3"/>
            <HStack>
              <VStack space={1} >
                <HStack>
                  <Text color="#2C2E32" mt="0" mr="5" fontWeight="bold" fontSize="13px">
                    NAME:
                  </Text>
                  <Text color="#FFEBE3" mt="0" fontWeight="bold" fontSize="13px">
                    IM3002 Assignment 1
                  </Text>
                </HStack>
                <HStack>
                  <Text color="#2C2E32" mt="1" mr="5" fontWeight="bold" fontSize="13px">
                    LOCATION:
                  </Text>
                  <Text color="#FFEBE3" mt="1" fontWeight="bold" fontSize="13px">
                    LHS-TR-31
                  </Text>
                </HStack>
                <HStack>
                  <Text color="#2C2E32" mt="1" mr="5" fontWeight="bold" fontSize="13px">
                    DATE:
                  </Text>
                  <Text color="#FFEBE3" mt="1" fontWeight="bold" fontSize="13px">
                    13/03/2022
                  </Text>
                </HStack>
              </VStack>
              <Spacer/>
              <VStack justifyContent="center" alignItems="center">
                <Text color="#FFEBE3" mt="1" fontWeight="bold" fontSize="30px">
                    30
                </Text>
                <Text color="#FFEBE3" mt="1" fontWeight="bold" fontSize="13px">
                    DAYS LEFT
                </Text>
              </VStack>
            </HStack>
            <HStack>
              <Icon as={Entypo} name="dot-single" size="5" color="#FFEBE3"  ml="-12px" mb="-12px"/>
              <Spacer/>
              <Icon as={Entypo} name="dot-single" size="5" color="#FFEBE3"  mr="-12px" mb="-12px"/>
            </HStack>
          </Box>
        </Pressable>
      </Box>
    );
  }