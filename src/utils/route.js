import qs from 'qs';

const buildLoginRedirectPath = function (redirectPath) {
  redirectPath = redirectPath || location.hash.substring(1);
  // console.log(redirectPath)
  return `${appConfig.loginPath}?redirect=${encodeURI(redirectPath)}`;
};

const redirect = function (hashOrUri) {
  if (!hashOrUri.startsWith('#')) {
    if (!hashOrUri.startsWith('/')) {
      hashOrUri = `/${hashOrUri}`;
    }
    hashOrUri = `#${hashOrUri}`;
  }
  location.hash = hashOrUri;
};

const getQueryParams = function (props) {
  console.log(props)
  return qs.parse(props.location.search.substring(1));
};


export {
  buildLoginRedirectPath,
  redirect,
  getQueryParams,
}
