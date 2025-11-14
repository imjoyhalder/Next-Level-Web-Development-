//type UserRoles = 'Admin' | "Editor" | 'Viewer'

enum UserRoles {
    Admin = 'Admin', 
    Editor = "Editor", 
    Viewer = "Viewer"
}

const canEdit = (role: UserRoles)=>{
    if(role === 'Admin' || role === "Editor" ){
        return true
    }
    else{
        return false 
    }
}

const isEditAble = canEdit('Admin')