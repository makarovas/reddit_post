import { deletePost } from "./actions";

test("deletePost", () => {
  //given
  const result = deletePost();

  //when
  // expect

  expect(result.type).toEqual("DELETE_POST");
});
