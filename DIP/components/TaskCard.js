import React from "react";
import { Pressable, Text, Box, HStack, VStack, Spacer, Flex, Badge, Center, NativeBaseProvider, Divider, IconButton, Icon, Popover, Button } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function TaskCard() {
    return (
      <Box alignItems="center">
        <Pressable onPress={() => console.log("Deadline Details")}>
          <Box width="350px" borderWidth="1" borderColor="#8696A7" shadow="3" bg="#8696A7" p="5" rounded="8">
            <HStack>
              <Icon as={Entypo} name="dot-single" size="5" color="#F0EDE9" ml="-12px" mt="-12px"/>
              <Spacer/>
              <Icon as={Entypo} name="dot-single" size="5" color="#F0EDE9" mr="-12px" mt="-12px"/>
            </HStack>
            <HStack alignItems="center">
              <Badge 
                bg="#F0EDE9"
                shadow="0"
                _text={{color: "#2C2E32", fontSize: "14px", fontWeight: "bold"}} 
                variant="solid" 
                rounded="4">
                      TASK
              </Badge>
              <Spacer/>
              <Popover trigger={triggerProps => {
                return(
                  <IconButton 
                    {...triggerProps}
                    icon={<Icon as={Entypo} name="edit" />} 
                    borderRadius="full" 
                    _icon={{
                      color: "#F0EDE9",
                      size: "5",
                    }} 
                    _hover={{
                      bg: "#F0EDE9:alpha.20"
                    }} 
                    _pressed={{
                      bg: "#F0EDE9",
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
                        bg="#8696A7"
                        _pressed={{
                          bg: "#F0EDE9",
                        }} 
                      >
                        Edit
                      </Button>
                      <Button 
                        bg="#8696A7"
                        _pressed={{
                          bg: "#F0EDE9",
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
                  <Text color="#F0EDE9" mt="0" fontWeight="bold" fontSize="13px">
                    IM3080 Coding Demo
                  </Text>
                </HStack>
                <HStack>
                  <Text color="#2C2E32" mt="1" mr="5" fontWeight="bold" fontSize="13px">
                    LOCATION:
                  </Text>
                  <Text color="#F0EDE9" mt="1" fontWeight="bold" fontSize="13px">
                    LHN-PDR-06
                  </Text>
                </HStack>
                <HStack>
                  <Text color="#2C2E32" mt="1" mr="5" fontWeight="bold" fontSize="13px">
                    DATE:
                  </Text>
                  <Text color="#F0EDE9" mt="1" fontWeight="bold" fontSize="13px">
                    10/04/2022
                  </Text>
                </HStack>
              </VStack>
              <Spacer/>
              <VStack justifyContent="center" alignItems="center">
                <Text color="#F0EDE9" mt="1" fontWeight="bold" fontSize="30px">
                    97
                </Text>
                <Text color="#F0EDE9" mt="1" fontWeight="bold" fontSize="13px">
                    DAYS LEFT
                </Text>
              </VStack>
            </HStack>
            <HStack>
              <Icon as={Entypo} name="dot-single" size="5" color="#F0EDE9"  ml="-12px" mb="-12px"/>
              <Spacer/>
              <Icon as={Entypo} name="dot-single" size="5" color="#F0EDE9"  mr="-12px" mb="-12px"/>
            </HStack>
          </Box>
        </Pressable>
      </Box>
    );
  }