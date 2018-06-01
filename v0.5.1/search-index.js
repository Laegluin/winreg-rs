var searchIndex = {};
searchIndex["winreg"] = {"doc":"Crate for accessing MS Windows registry","items":[[6,"HKEY","winreg","",null,null],[3,"RegKeyMetadata","","Metadata returned by `RegKey::query_info`",null,null],[12,"sub_keys","","",0,null],[12,"max_sub_key_len","","",0,null],[12,"max_class_len","","",0,null],[12,"values","","",0,null],[12,"max_value_name_len","","",0,null],[12,"max_value_len","","",0,null],[3,"RegValue","","Raw registry value",null,null],[12,"bytes","","",1,null],[12,"vtype","","",1,null],[3,"RegKey","","Handle of opened registry key",null,null],[3,"EnumKeys","","Iterator over subkeys names",null,null],[3,"EnumValues","","Iterator over values",null,null],[0,"enums","","`use winreg::enums::*;` to import all needed enumerations and constants",null,null],[17,"HKEY_CLASSES_ROOT","winreg::enums","",null,null],[17,"HKEY_CURRENT_USER","","",null,null],[17,"HKEY_LOCAL_MACHINE","","",null,null],[17,"HKEY_USERS","","",null,null],[17,"HKEY_PERFORMANCE_DATA","","",null,null],[17,"HKEY_PERFORMANCE_TEXT","","",null,null],[17,"HKEY_PERFORMANCE_NLSTEXT","","",null,null],[17,"HKEY_CURRENT_CONFIG","","",null,null],[17,"HKEY_DYN_DATA","","",null,null],[17,"HKEY_CURRENT_USER_LOCAL_SETTINGS","","",null,null],[17,"KEY_QUERY_VALUE","","",null,null],[17,"KEY_SET_VALUE","","",null,null],[17,"KEY_CREATE_SUB_KEY","","",null,null],[17,"KEY_ENUMERATE_SUB_KEYS","","",null,null],[17,"KEY_NOTIFY","","",null,null],[17,"KEY_CREATE_LINK","","",null,null],[17,"KEY_WOW64_32KEY","","",null,null],[17,"KEY_WOW64_64KEY","","",null,null],[17,"KEY_WOW64_RES","","",null,null],[17,"KEY_READ","","",null,null],[17,"KEY_WRITE","","",null,null],[17,"KEY_EXECUTE","","",null,null],[17,"KEY_ALL_ACCESS","","",null,null],[4,"RegType","","Enumeration of possible registry value types",null,null],[13,"REG_NONE","","",2,null],[13,"REG_SZ","","",2,null],[13,"REG_EXPAND_SZ","","",2,null],[13,"REG_BINARY","","",2,null],[13,"REG_DWORD","","",2,null],[13,"REG_DWORD_BIG_ENDIAN","","",2,null],[13,"REG_LINK","","",2,null],[13,"REG_MULTI_SZ","","",2,null],[13,"REG_RESOURCE_LIST","","",2,null],[13,"REG_FULL_RESOURCE_DESCRIPTOR","","",2,null],[13,"REG_RESOURCE_REQUIREMENTS_LIST","","",2,null],[13,"REG_QWORD","","",2,null],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"regtype"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"regtype"}],"output":{"name":"bool"}}],[0,"types","winreg","Traits for loading/saving Registry values",null,null],[8,"FromRegValue","winreg::types","A trait for types that can be loaded from registry values.",null,null],[10,"from_reg_value","","",3,{"inputs":[{"name":"regvalue"}],"output":{"name":"result"}}],[8,"ToRegValue","","A trait for types that can be written into registry values.",null,null],[10,"to_reg_value","","",4,{"inputs":[{"name":"self"}],"output":{"name":"regvalue"}}],[11,"fmt","winreg","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"regkeymetadata"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"regvalue"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"regvalue"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"predef","","Open one of predefined keys:",5,{"inputs":[{"name":"hkey"}],"output":{"name":"regkey"}}],[11,"raw_handle","","Return inner winapi HKEY of a key:",5,{"inputs":[{"name":"self"}],"output":{"name":"hkey"}}],[11,"open_subkey","","Open subkey with `KEY_READ` permissions. Will open another handle to itself if `path` is an empty string. To open with different permissions use `open_subkey_with_flags`. You can also use `create_subkey` to open with `KEY_ALL_ACCESS` permissions.",5,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"generics":["regkey"],"name":"result"}}],[11,"open_subkey_with_flags","","Open subkey with desired permissions. Will open another handle to itself if `path` is an empty string.",5,{"inputs":[{"name":"self"},{"name":"p"},{"name":"regsam"}],"output":{"generics":["regkey"],"name":"result"}}],[11,"create_subkey","","Create subkey (and all missing parent keys) and open it with `KEY_ALL_ACCESS` permissions. Will just open key if it already exists. Will open another handle to itself if `path` is an empty string. To create with different permissions use `create_subkey_with_flags`.",5,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"generics":["regkey"],"name":"result"}}],[11,"create_subkey_with_flags","","",5,{"inputs":[{"name":"self"},{"name":"p"},{"name":"regsam"}],"output":{"generics":["regkey"],"name":"result"}}],[11,"copy_tree","","Copy all the values and subkeys from `path` to `dest` key. WIll copy the content of `self` if `path` is an empty string.",5,{"inputs":[{"name":"self"},{"name":"p"},{"name":"regkey"}],"output":{"name":"result"}}],[11,"query_info","","",5,{"inputs":[{"name":"self"}],"output":{"generics":["regkeymetadata"],"name":"result"}}],[11,"enum_keys","","Return an iterator over subkeys names.",5,{"inputs":[{"name":"self"}],"output":{"name":"enumkeys"}}],[11,"enum_values","","Return an iterator over values.",5,{"inputs":[{"name":"self"}],"output":{"name":"enumvalues"}}],[11,"delete_subkey","","Delete key.Key names are not case sensitive. Cannot delete if it has subkeys. Use `delete_subkey_all` for that.",5,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"delete_subkey_all","","Recursively delete subkey with all its subkeys and values. If `path` is an empty string, the subkeys and values of this key are deleted.",5,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"get_value","","Get a value from registry and seamlessly convert it to the specified rust type with `FromRegValue` implemented (currently `String`, `u32` and `u64`). Will get the `Default` value if `name` is an empty string.",5,{"inputs":[{"name":"self"},{"name":"n"}],"output":{"name":"result"}}],[11,"get_raw_value","","Get raw bytes from registry value. Will get the `Default` value if `name` is an empty string.",5,{"inputs":[{"name":"self"},{"name":"n"}],"output":{"generics":["regvalue"],"name":"result"}}],[11,"set_value","","Seamlessly convert a value from a rust type and write it to the registry value with `ToRegValue` trait implemented (currently `String`, `&str`, `u32` and `u64`). Will set the `Default` value if `name` is an empty string.",5,{"inputs":[{"name":"self"},{"name":"n"},{"name":"t"}],"output":{"name":"result"}}],[11,"set_raw_value","","Write raw bytes from `RegValue` struct to a registry value. Will set the `Default` value if `name` is an empty string.",5,{"inputs":[{"name":"self"},{"name":"n"},{"name":"regvalue"}],"output":{"name":"result"}}],[11,"delete_value","","Delete specified value from registry. Will delete the `Default` value if `name` is an empty string.",5,{"inputs":[{"name":"self"},{"name":"n"}],"output":{"name":"result"}}],[11,"drop","","",5,{"inputs":[{"name":"self"}],"output":null}],[11,"next","","",6,{"inputs":[{"name":"self"}],"output":{"generics":["result"],"name":"option"}}],[11,"next","","",7,{"inputs":[{"name":"self"}],"output":{"generics":["result"],"name":"option"}}]],"paths":[[3,"RegKeyMetadata"],[3,"RegValue"],[4,"RegType"],[8,"FromRegValue"],[8,"ToRegValue"],[3,"RegKey"],[3,"EnumKeys"],[3,"EnumValues"]]};
initSearch(searchIndex);
