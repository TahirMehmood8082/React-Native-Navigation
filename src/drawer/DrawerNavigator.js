import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'  

const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
      <Drawer.Screen 
        name='Main' 
        component={Main}
        options={{headerShown: true}}
        />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator