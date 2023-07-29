import React from "react";
import { useWishListList } from "../../components/WishListContext/WishListContext";
import WishListProducts from "../../components/WishListProducts/WishListProducts";

const WishList = () => {
  const { WishList } = useWishListList();

  return (
    <>
      <div className="bg-colorBackGround h-screen">
        <div className="border text-colorWhite py-8">
          <h1 className="text-colorWhite text-center text-2xl font-medium">
            WishList
          </h1>
        </div>
        <div>
          {WishList.map((item) => {
            return <WishListProducts key={item.id} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default WishList;
