const users = [
    { email: "kullanici1@example.com", password: "sifre1" },
    { email: "kullanici2@example.com", password: "sifre2" },
  ];
  
  export function addUser(email, password) {
    users.push({ email, password });
  }
  
  export function authenticateUser(email, password) {
    return users.find(user => user.email === email && user.password === password);
  }
  