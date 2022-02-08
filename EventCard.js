import React from "react";
import { Pressable, Text, Box, HStack, VStack, Spacer, Flex, Badge, Center, NativeBaseProvider, Divider, IconButton, Icon, Popover, Button } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function EventCard() {
    return (
      <Box alignItems="center">
        <Pressable onPress={() => console.log("Deadline Details")}>
          <Box width="350px" borderWidth="1" borderColor="#8A9F95" shadow="3" bg="#8A9F95" p="5" rounded="8">
            <HStack>
              <Icon as={Entypo} name="dot-single" size="5" color="#E6C47D" ml="-12px" mt="-12px"/>
              <Spacer/>
              <Icon as={Entypo} name="dot-single" size="5" color="#E6C47D" mr="-12px" mt="-12px"/>
            </HStack>
            <HStack alignItems="center">
              <Badge 
                bg="#E3F3EC"
                shadow="0"
                _text={{color: "#2C2E32", fontSize: "14px", fontWeight: "bold"}} 
                variant="solid" 
                rounded="4">
                      EVENT
              </Badge>
              <Spacer/>
              <Popover trigger={triggerProps => {
                return(
                  <IconButton 
                    {...triggerProps}
                    icon={<Icon as={Entypo} name="edit" />} 
                    borderRadius="full" 
                    _icon={{
                      color: "#E6C47D",
                      size: "5",
                    }} 
                    _hover={{
                      bg: "#E6C47D:alpha.20"
                    }} 
                    _pressed={{
                      bg: "#E6C47D",
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
                        bg="#8A9F95"
                        _pressed={{
                          bg: "#E6C47D",
                        }}                     
                      >
                        Edit
                      </Button>
                      <Button
                        bg="#8A9F95"
                        _pressed={{
                          bg: "#E6C47D",
                        }} 
                      >
                        Delete
                      </Button>
                    </Button.Group>
                  </Popover.Footer>
                </Popover.Content>
              </Popover>
            </HStack>
            <Divider bg="#E6C47D" thickness="2" my="3"/>
            <HStack>
              <VStack space={1} >
                <HStack>
                  <Text color="#2C2E32" mt="0" mr="5" fontWeight="bold" fontSize="13px">
                    NAME:
                  </Text>
                  <Text color="#E3F3EC" mt="0" fontWeight="bold" fontSize="13px">
                    IM3080 Project Meeting
                  </Text>
                </HStack>
                <HStack>
                  <Text color="#2C2E32" mt="1" mr="5" fontWeight="bold" fontSize="13px">
                    LOCATION:
                  </Text>
                  <Text color="#E3F3EC" mt="1" fontWeight="bold" fontSize="13px">
                    LHN-TR-22
                  </Text>
                </HStack>
                <HStack>
                  <Text color="#2C2E32" mt="1" mr="5" fontWeight="bold" fontSize="13px">
                    DATE:
                  </Text>
                  <Text color="#E3F3EC" mt="1" fontWeight="bold" fontSize="13px">
                    11/02/2022
                  </Text>
                </HStack>
              </VStack>
              <Spacer/>
              <VStack justifyContent="center" alignItems="center">
                <Text color="#E3F3EC" mt="1" fontWeight="bold" fontSize="30px">
                    2
                </Text>
                <Text color="#E3F3EC" mt="1" fontWeight="bold" fontSize="13px">
                    DAYS LEFT
                </Text>
              </VStack>
            </HStack>
            <HStack>
              <Icon as={Entypo} name="dot-single" size="5" color="#E6C47D"  ml="-12px" mb="-12px"/>
              <Spacer/>
              <Icon as={Entypo} name="dot-single" size="5" color="#E6C47D"  mr="-12px" mb="-12px"/>
            </HStack>
          </Box>
        </Pressable>
      </Box>
    );
  }