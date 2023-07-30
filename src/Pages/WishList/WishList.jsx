import React from "react";
import { useWishListList } from "../../components/WishListContext/WishListContext";
import WishListProducts from "../../components/WishListProducts/WishListProducts";

const WishList = () => {
  const { WishList, setWishList } = useWishListList();

  const emptyWishList = () => {
    setWishList([]);
  };

  return (
    <>
      <div className="bg-colorBackGround min-h-screen">
        <div>
          <div className=" text-colorWhite py-8">
            <h1 className="text-colorWhite text-center text-2xl font-medium">
              WishList
            </h1>
          </div>

          <div className="text-colorWhite px-8">
            <p className="text-xl font-medium">WishList ({WishList.length})</p>
          </div>

          <div className="text-center text-colorWhite mt-4">
            <button
              onClick={emptyWishList}
              className="border px-4 py-2 text-base font-medium rounded-xl hover:bg-colorWhite hover:text-colorBlack transition-all sm:bg-colorBlack sm:text-colorWhite "
            >
              Empty WishList
            </button>
          </div>

          {WishList.length === 0 ? (
            <div className="flex items-center h-screen justify-center">
              <div className="text-colorWhite">
                <p>Your WishList is Empty</p>
              </div>
            </div>
          ) : (
            <div className="flex p-6 flex-wrap sm:flex-col">
              {WishList.map((item) => {
                return <WishListProducts key={item.id} data={item} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishList;
