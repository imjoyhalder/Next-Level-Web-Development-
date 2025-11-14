
const UserRoles = {
    Admin: "Admin", 
    Editor: "Editor", 
    Viewer: 'Viewer'
} as const 

const canEdit = (role: UserRoles)=>{
    if(role === 'Admin' || role === "Editor" ){
        return true
    }
    else{
        return false 
    }
}