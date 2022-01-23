export const GET_GALLERIES = 'GET_GET_GALLERIES';
export const GET_GALLERIES_SUCCESS = 'GET_GALLERIES_SUCCESS';
export const GET_GALLERIES_FAILURE = 'GET_GALLERIES_FAILURE';

export function getGalleriesAction() {
  return { type: GET_GALLERIES };
}
export function getGalleriesSuccessAction(galleries) {
  return {
    type: GET_GALLERIES_SUCCESS,
    payload: { galleries },
  };
}
export function getGalleriesFailureAction(error) {
  return {
    type: GET_GALLERIES_FAILURE,
    payload: { error },
  };
}
