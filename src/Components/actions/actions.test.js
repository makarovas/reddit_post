import { deletePost } from "./actions";

test("deletePost", () => {
  //given
  const result = deletePost();
  // expect
  expect(result.type).toEqual("DELETE_POST");
  expect(result).toMatchSnapshot();
});
