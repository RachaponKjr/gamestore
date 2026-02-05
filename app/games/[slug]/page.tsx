import TopUpPage from "./_components/topup";
export async function generateStaticParams() {
  // หากคุณมีรายการ slug ในมือ หรือดึงมาจาก API/Database
  // ให้คืนค่ากลับไปเป็น array ของ object แบบนี้ครับ
  const games = [{ slug: "game-1" }, { slug: "game-2" }];

  return games.map((game) => ({
    slug: game.slug,
  }));
}

const page = () => {
  return <TopUpPage />;
};

export default page;
