import resolveShopFromShopId from "./resolveShopFromShopId";

const fakeUser = {
  _id: "123",
  name: "Bob Builder",
  shopId: "W64ZQe9RUMuAoKrli"
};

const fakeShop = {
  _id: fakeUser.shopId,
  name: "Reaction"
};

test("calls queries.shops.shopById and returns the requested shop", async () => {
  const shopById = jest.fn().mockName("queries.shops.shopById").mockReturnValueOnce(Promise.resolve(fakeShop));

  const shopObject = await resolveShopFromShopId(fakeUser, {}, { queries: { shops: { shopById } } });

  expect(shopObject).toEqual(fakeShop);

  expect(shopById).toHaveBeenCalled();
  expect(shopById.mock.calls[0][1]).toBe(fakeUser.shopId);
});
