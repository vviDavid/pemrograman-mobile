import { View, Text, StyleSheet, Button, Pressable, Image } from 'react-native';

function KartuMahasiswa({ nama, jurusan, universitas, gambar = "apeni.jpg"}) {
return (
    <View style={styles.card}>
      <Image source={require(`./assets/spid.jpg`)} 
        style={styles.gambar}
      />
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.informasi}>Jurusan : {jurusan} </Text>
      <Text style={styles.informasi}>Universitas : {universitas}</Text>
    </View>
)
}

export default function App(){
  return (
    <View style={styles.container}>
      <KartuMahasiswa 
        nama="Rizky Maulana" 
        jurusan="Teknik Informatika"
        universitas="Universitas Islam Indonesia"
      />
      <KartuMahasiswa
        nama="Aldi Taher"
        jurusan="Sistem Informasi"
        universitas="IBBI"
      />

      <KartuMahasiswa
        nama="Budi"
        jurusan="Teknik Elektro"
        universitas="Universitas Gadjah Mada"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20
  },
  gambar: {
    width: 80,
    height: 80,
    borderRadius: 100
  },
  nama: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  informasi: {
    fontSize: 16,
    color: 'gray'
  },
});