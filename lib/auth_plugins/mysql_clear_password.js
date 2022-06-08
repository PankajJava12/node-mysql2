const mysql_clear_password = ({ connection }) => () => { 
    const password = connection.config.password;
    return Buffer.from(password + '\0') 
}

module.exports = mysql_clear_password;