import React from 'react';






const Dashboard = React.lazy(() => import('./views/Dashboard'));

//onepos
const Onepos =  React.lazy(() => import('./views/Onepos/WorkspaceOnepos/AddWorkspaceOnepos'));
const AddOneposUser =  React.lazy(() => import('./views/Onepos/WorkspaceOnepos/AddUserOnepos'));
const ViewOneposWorkspace =  React.lazy(() => import('./views/Onepos/WorkspaceOnepos/ViewWorkspaceOnepos'));


//salon
const Salon =  React.lazy(() => import('./views/Salon/WorkspaceSalon/AddWorkspaceSalon.js'));
const AddSalonUser =  React.lazy(() => import('./views/Salon/WorkspaceSalon/AddUserSalon'));
const ViewSalonWorkspace =  React.lazy(() => import('./views/Salon/WorkspaceSalon/ViewWorkspaceSalon'));


//Hotel
const Hotel =  React.lazy(() => import('./views/Hotel/WorkspaceHotel/AddWorkspaceHotel'));
const AddHotelUser =  React.lazy(() => import('./views/Hotel/WorkspaceHotel/AddUserHotel'));
const ViewHotelWorkspace =  React.lazy(() => import('./views/Hotel/WorkspaceHotel/ViewWorkspaceHotel'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
 
  
  
  { path: '/', exact: true, name: 'Home'},
 { path: '/dashboard', name: 'Dashboard', component: Dashboard},
 //onepos
 { path: '/onepos/addWorkspace', name: 'Onepos', component: Onepos},
 { path: '/onepos/adduser', name: 'AddOnepos', component: AddOneposUser},
 { path: '/onepos/viewWorkspace', name: 'ViewOnepos', component: ViewOneposWorkspace},

 //salon
 { path: '/salon/addWorkspace', name: 'Salon', component: Salon},
 { path: '/salon/addsalonuser', name: 'AddSalon', component: AddSalonUser},
 { path: '/salon/viewWorkspace', name: 'ViewSalon', component: ViewSalonWorkspace},

  //Hotel
  { path: '/hotel/addWorkspace', name: 'hotel', component: Hotel},
  { path: '/hotel/addsalonuser', name: 'Addhotel', component: AddHotelUser},
  { path: '/hotel/viewWorkspace', name: 'Viewhotel', component: ViewHotelWorkspace},

  
];

export default routes;
