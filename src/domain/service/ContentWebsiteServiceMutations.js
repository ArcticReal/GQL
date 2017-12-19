import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const addWebSiteRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz addWebSiteRole method',
  args:{roleTypeId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},partyId: {type: GraphQLString},webSiteId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/addWebSiteRole?roleTypeId=${args.roleTypeId}sequenceNum=${args.sequenceNum}partyId=${args.partyId}webSiteId=${args.webSiteId}thruDate=${args.thruDate}fromDate=${args.fromDate}`, null, req);
  }
};
export {addWebSiteRole};


const autoCreateWebSiteContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz autoCreateWebSiteContent method',
  args:{webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/autoCreateWebSiteContent?webSiteContentTypeId=${args.webSiteContentTypeId}webSiteId=${args.webSiteId}`, null, req);
  }
};
export {autoCreateWebSiteContent};


const createWebSite = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWebSite method',
  args:{siteName: {type: GraphQLString},webSiteId: {type: GraphQLString},secureContentPrefix: {type: GraphQLString},cookieDomain: {type: GraphQLString},standardContentPrefix: {type: GraphQLString},httpPort: {type: GraphQLString},enableHttps: {type: GraphQLString},httpHost: {type: GraphQLString},visualThemeSetId: {type: GraphQLString},httpsHost: {type: GraphQLString},httpsPort: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/createWebSite?siteName=${args.siteName}webSiteId=${args.webSiteId}secureContentPrefix=${args.secureContentPrefix}cookieDomain=${args.cookieDomain}standardContentPrefix=${args.standardContentPrefix}httpPort=${args.httpPort}enableHttps=${args.enableHttps}httpHost=${args.httpHost}visualThemeSetId=${args.visualThemeSetId}httpsHost=${args.httpsHost}httpsPort=${args.httpsPort}`, null, req);
  }
};
export {createWebSite};


const createWebSiteContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWebSiteContent method',
  args:{webSiteContentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},webSiteId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/createWebSiteContent?webSiteContentTypeId=${args.webSiteContentTypeId}contentId=${args.contentId}webSiteId=${args.webSiteId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createWebSiteContent};


const createWebSiteContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWebSiteContentType method',
  args:{webSiteContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/createWebSiteContentType?webSiteContentTypeId=${args.webSiteContentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createWebSiteContentType};


const createWebSitePathAlias = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWebSitePathAlias method',
  args:{fromDate: {type: GraphQLString},webSiteId: {type: GraphQLString},pathAlias: {type: GraphQLString},aliasTo: {type: GraphQLString},contentId: {type: GraphQLString},mapKey: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/createWebSitePathAlias?fromDate=${args.fromDate}webSiteId=${args.webSiteId}pathAlias=${args.pathAlias}aliasTo=${args.aliasTo}contentId=${args.contentId}mapKey=${args.mapKey}thruDate=${args.thruDate}`, null, req);
  }
};
export {createWebSitePathAlias};


const createWebSiteRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWebSiteRole method',
  args:{roleTypeId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},partyId: {type: GraphQLString},webSiteId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/createWebSiteRole?roleTypeId=${args.roleTypeId}sequenceNum=${args.sequenceNum}partyId=${args.partyId}webSiteId=${args.webSiteId}thruDate=${args.thruDate}fromDate=${args.fromDate}`, null, req);
  }
};
export {createWebSiteRole};


const generateMissingSeoUrlForWebsite = {
  type: GraphQLString,
  description: 'mutation for ofbiz generateMissingSeoUrlForWebsite method',
  args:{webSiteId: {type: GraphQLString},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/generateMissingSeoUrlForWebsite?typeGenerate=${args.typeGenerate}webSiteId=${args.webSiteId}prodCatalogId=${args.prodCatalogId}`, null, req);
  }
};
export {generateMissingSeoUrlForWebsite};


const getWebSitePathAlias = {
  type: GraphQLString,
  description: 'mutation for ofbiz getWebSitePathAlias method',
  args:{fromDate: {type: GraphQLString},webSiteId: {type: GraphQLString},pathAlias: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/getWebSitePathAlias?fromDate=${args.fromDate}webSiteId=${args.webSiteId}pathAlias=${args.pathAlias}`, null, req);
  }
};
export {getWebSitePathAlias};


const removeWebSiteContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeWebSiteContent method',
  args:{fromDate: {type: GraphQLString},webSiteContentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/removeWebSiteContent?fromDate=${args.fromDate}webSiteContentTypeId=${args.webSiteContentTypeId}contentId=${args.contentId}webSiteId=${args.webSiteId}`, null, req);
  }
};
export {removeWebSiteContent};


const removeWebSiteContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeWebSiteContentType method',
  args:{webSiteContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/removeWebSiteContentType?webSiteContentTypeId=${args.webSiteContentTypeId}`, null, req);
  }
};
export {removeWebSiteContentType};


const removeWebSitePathAlias = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeWebSitePathAlias method',
  args:{fromDate: {type: GraphQLString},webSiteId: {type: GraphQLString},pathAlias: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/removeWebSitePathAlias?fromDate=${args.fromDate}webSiteId=${args.webSiteId}pathAlias=${args.pathAlias}`, null, req);
  }
};
export {removeWebSitePathAlias};


const removeWebSiteRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz removeWebSiteRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/removeWebSiteRole?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}partyId=${args.partyId}webSiteId=${args.webSiteId}`, null, req);
  }
};
export {removeWebSiteRole};


const updateWebSite = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebSite method',
  args:{webSiteId: {type: GraphQLString},secureContentPrefix: {type: GraphQLString},cookieDomain: {type: GraphQLString},standardContentPrefix: {type: GraphQLString},httpPort: {type: GraphQLString},siteName: {type: GraphQLString},enableHttps: {type: GraphQLString},httpHost: {type: GraphQLString},visualThemeSetId: {type: GraphQLString},httpsHost: {type: GraphQLString},httpsPort: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/updateWebSite?webSiteId=${args.webSiteId}secureContentPrefix=${args.secureContentPrefix}cookieDomain=${args.cookieDomain}standardContentPrefix=${args.standardContentPrefix}httpPort=${args.httpPort}siteName=${args.siteName}enableHttps=${args.enableHttps}httpHost=${args.httpHost}visualThemeSetId=${args.visualThemeSetId}httpsHost=${args.httpsHost}httpsPort=${args.httpsPort}`, null, req);
  }
};
export {updateWebSite};


const updateWebSiteContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebSiteContent method',
  args:{fromDate: {type: GraphQLString},webSiteContentTypeId: {type: GraphQLString},contentId: {type: GraphQLString},webSiteId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/updateWebSiteContent?fromDate=${args.fromDate}webSiteContentTypeId=${args.webSiteContentTypeId}contentId=${args.contentId}webSiteId=${args.webSiteId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateWebSiteContent};


const updateWebSiteContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebSiteContentType method',
  args:{webSiteContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/updateWebSiteContentType?webSiteContentTypeId=${args.webSiteContentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateWebSiteContentType};


const updateWebSitePathAlias = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebSitePathAlias method',
  args:{fromDate: {type: GraphQLString},webSiteId: {type: GraphQLString},pathAlias: {type: GraphQLString},aliasTo: {type: GraphQLString},contentId: {type: GraphQLString},mapKey: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/updateWebSitePathAlias?fromDate=${args.fromDate}webSiteId=${args.webSiteId}pathAlias=${args.pathAlias}aliasTo=${args.aliasTo}contentId=${args.contentId}mapKey=${args.mapKey}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateWebSitePathAlias};


const updateWebSiteRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebSiteRole method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},partyId: {type: GraphQLString},webSiteId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/updateWebSiteRole?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}sequenceNum=${args.sequenceNum}partyId=${args.partyId}webSiteId=${args.webSiteId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateWebSiteRole};


const webSiteRoleInterface = {
  type: GraphQLString,
  description: 'mutation for ofbiz webSiteRoleInterface method',
  args:{fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},webSiteId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/contentWebsite/webSiteRoleInterface?fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}partyId=${args.partyId}webSiteId=${args.webSiteId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {webSiteRoleInterface};
