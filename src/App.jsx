import axios from "axios";
import { useEffect } from "react";

const BASE_Url = "http://localhost:4000";
function App() {

  const getAllUser = async () => {
    try {
      const response = await axios.get(`${BASE_Url}/users`);
      console.log(response.data);  // Kullanıcı verileri burada
      // setUsers(response.data);  // (React kullanıyorsanız)
    } catch (error) {
      console.error("Bir hata oluştu:", error);
      alert("Kullanıcılar yüklenemedi. Lütfen daha sonra tekrar deneyiniz.");
    }
  };
  const getUserById = async (userId) => {
    try {
      const response = await axios.get(`${BASE_Url}/users/${userId}`);
      console.log(response.data);  // Kullanıcı verileri burada
      // setUsers(response.data);  // (React kullanıyorsanız)
    } catch (error) {
      console.error("Bir hata oluştu:", error);
      alert("Kullanıcılar yüklenemedi. Lütfen daha sonra tekrar deneyiniz.");
    }
  };
  const createUser = async (newUser) => {
    try {
      const response = await axios.post(`${BASE_Url}/users`, newUser);
      console.log(response.data);  // Kullanıcı verileri burada
      // setUsers(response.data);  // (React kullanıyorsanız)
    } catch (error) {
      console.error("Bir hata oluştu:", error);
      alert("Kullanıcılar yüklenemedi. Lütfen daha sonra tekrar deneyiniz.");
    }
  };

  const updateUser = async (userId, updatedUser) => {
    try {
      const response = await axios.put(`${BASE_Url}/users/${userId}`, updatedUser);
      console.log(response.data);  // Kullanıcı verileri burada

    } catch (error) {
      console.error("Bir hata oluştu:", error);
      alert("Kullanıcılar yüklenemedi. Lütfen daha sonra tekrar deneyiniz.");
    }
  }
  const deleteUserById = async (userId) => {
    try {
      const response = await axios.delete(`${BASE_Url}/users/${userId}`);
      console.log(response.data);  // Kullanıcı verileri burada
      // setUsers(response.data);  // (React kullanıyorsanız)
    } catch (error) {
      console.error("Bir hata oluştu:", error);
      alert("Kullanıcılar yüklenemedi. Lütfen daha sonra tekrar deneyiniz.");
    }
  };
  // const newUser = {
  //   "firstName": "jone",
  //   "lastName": "mac",
  //   "username": "ali5",
  //   "phoneNumber": "111111111",
  //   "emailAddress": "jone.mac@learningcontainer.com",
  //   "password": "123456"
  // }
  useEffect(() => {
    // deleteUserById("093a")
    // getAllUser();  // Fonksiyonu çalıştırmak
    // createUser(newUser);
    // updateUser("093a", {
    //   "firstName": "jone",
    //   "lastName": "mac",
    //   "username": "ali23",
    //   "phoneNumber": "111111111",
    //   "emailAddress": "jone.mac@learningcontainer.com",
    //   "password": "123456"
    // })
  }, [])

  return (
    <>

    </>
  );
}

export default App;
