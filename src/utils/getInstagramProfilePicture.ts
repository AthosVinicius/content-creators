export async function getInstagramProfilePicture(username: string): Promise<void> {
    try {
        const response: any = await fetch(`https://www.instagram.com/${username}/?__a=1`, { mode: "no-cors" });

        // // Verifica se a solicitação foi bem-sucedida
        // if (response.status === 200) {
        //     const userData = response.data.graphql.user;

        //     // Obtém a URL da foto de perfil
        //     const profilePicUrl = userData.profile_pic_url_hd;

        //     // Cria um diretório para armazenar as imagens, se não existir
        //     fs.mkdirSync("profile_pictures", { recursive: true });

        //     // Define o caminho e o nome do arquivo para salvar a foto
        //     const filename = `profile_pictures/${username}.jpg`;

        //     // Baixa a foto de perfil
        //     const imageResponse = await axios.get(profilePicUrl, { responseType: "stream" });
        //     imageResponse.data.pipe(fs.createWriteStream(filename));

        //     console.log(`A foto de perfil do usuário '${username}' foi baixada com sucesso.`);
        // } else {
        //     console.log(`O perfil do usuário '${username}' não foi encontrado.`);
        // }
    } catch (error) {
        console.error("Ocorreu um erro ao baixar a foto de perfil:", error);
    }
}
