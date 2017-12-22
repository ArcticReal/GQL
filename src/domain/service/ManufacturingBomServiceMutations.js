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
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const addProductManufacturingRule = {
  type: ResponseType,
  description: 'mutation for ofbiz addProductManufacturingRule method',
  args:{productIdIn: {type: GraphQLString},fromDate: {type: GraphQLString},ruleOperator: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},productIdFor: {type: GraphQLString},productIdInSubst: {type: GraphQLString},ruleId: {type: GraphQLString},productFeature: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/addProductManufacturingRule?productIdIn=${args.productIdIn}fromDate=${args.fromDate}ruleOperator=${args.ruleOperator}quantity=${args.quantity}productId=${args.productId}productIdFor=${args.productIdFor}productIdInSubst=${args.productIdInSubst}ruleId=${args.ruleId}productFeature=${args.productFeature}thruDate=${args.thruDate}`, null, req);
  }
};
export {addProductManufacturingRule};


const copyBOMAssocs = {
  type: ResponseType,
  description: 'mutation for ofbiz copyBOMAssocs method',
  args:{productId: {type: GraphQLString},productAssocTypeId: {type: GraphQLString},copyToProductId: {type: GraphQLString},fromDate: {type: GraphQLString},productIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/copyBOMAssocs?productId=${args.productId}productAssocTypeId=${args.productAssocTypeId}copyToProductId=${args.copyToProductId}fromDate=${args.fromDate}productIdTo=${args.productIdTo}`, null, req);
  }
};
export {copyBOMAssocs};


const createBOMAssoc = {
  type: ResponseType,
  description: 'mutation for ofbiz createBOMAssoc method',
  args:{productId: {type: GraphQLString},productIdTo: {type: GraphQLString},productAssocTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},reason: {type: GraphQLString},scrapFactor: {type: GraphQLFloat},quantity: {type: GraphQLFloat},recurrenceInfoId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},estimateCalcMethod: {type: GraphQLString},instruction: {type: GraphQLString},routingWorkEffortId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/createBOMAssoc?productId=${args.productId}productIdTo=${args.productIdTo}productAssocTypeId=${args.productAssocTypeId}fromDate=${args.fromDate}reason=${args.reason}scrapFactor=${args.scrapFactor}quantity=${args.quantity}recurrenceInfoId=${args.recurrenceInfoId}sequenceNum=${args.sequenceNum}estimateCalcMethod=${args.estimateCalcMethod}instruction=${args.instruction}routingWorkEffortId=${args.routingWorkEffortId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createBOMAssoc};


const deleteProductManufacturingRule = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductManufacturingRule method',
  args:{ruleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/deleteProductManufacturingRule?ruleId=${args.ruleId}`, null, req);
  }
};
export {deleteProductManufacturingRule};


const getBOMTree = {
  type: ResponseType,
  description: 'mutation for ofbiz getBOMTree method',
  args:{productId: {type: GraphQLString},bomType: {type: GraphQLString},fromDate: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},type: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/getBOMTree?productId=${args.productId}bomType=${args.bomType}fromDate=${args.fromDate}amount=${args.amount}quantity=${args.quantity}type=${args.type}`, null, req);
  }
};
export {getBOMTree};


const getManufacturingComponents = {
  type: ResponseType,
  description: 'mutation for ofbiz getManufacturingComponents method',
  args:{productId: {type: GraphQLString},fromDate: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat},excludeWIPs: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/getManufacturingComponents?productId=${args.productId}fromDate=${args.fromDate}amount=${args.amount}quantity=${args.quantity}excludeWIPs=${args.excludeWIPs}`, null, req);
  }
};
export {getManufacturingComponents};


const getMaxDepth = {
  type: ResponseType,
  description: 'mutation for ofbiz getMaxDepth method',
  args:{productId: {type: GraphQLString},fromDate: {type: GraphQLString},bomType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/getMaxDepth?productId=${args.productId}fromDate=${args.fromDate}bomType=${args.bomType}`, null, req);
  }
};
export {getMaxDepth};


const getNotAssembledComponents = {
  type: ResponseType,
  description: 'mutation for ofbiz getNotAssembledComponents method',
  args:{productId: {type: GraphQLString},fromDate: {type: GraphQLString},amount: {type: GraphQLFloat},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/getNotAssembledComponents?productId=${args.productId}fromDate=${args.fromDate}amount=${args.amount}quantity=${args.quantity}`, null, req);
  }
};
export {getNotAssembledComponents};


const getProductsInPackages = {
  type: ResponseType,
  description: 'mutation for ofbiz getProductsInPackages method',
  args:{productId: {type: GraphQLString},fromDate: {type: GraphQLString},quantity: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/getProductsInPackages?productId=${args.productId}fromDate=${args.fromDate}quantity=${args.quantity}`, null, req);
  }
};
export {getProductsInPackages};


const initLowLevelCode = {
  type: ResponseType,
  description: 'mutation for ofbiz initLowLevelCode method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/initLowLevelCode?`, null, req);
  }
};
export {initLowLevelCode};


const searchDuplicatedAncestor = {
  type: ResponseType,
  description: 'mutation for ofbiz searchDuplicatedAncestor method',
  args:{productId: {type: GraphQLString},productIdTo: {type: GraphQLString},productAssocTypeId: {type: GraphQLString},fromDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/searchDuplicatedAncestor?productId=${args.productId}productIdTo=${args.productIdTo}productAssocTypeId=${args.productAssocTypeId}fromDate=${args.fromDate}`, null, req);
  }
};
export {searchDuplicatedAncestor};


const updateLowLevelCode = {
  type: ResponseType,
  description: 'mutation for ofbiz updateLowLevelCode method',
  args:{productIdTo: {type: GraphQLString},alsoComponents: {type: GraphQLBoolean},alsoVariants: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/updateLowLevelCode?productIdTo=${args.productIdTo}alsoComponents=${args.alsoComponents}alsoVariants=${args.alsoVariants}`, null, req);
  }
};
export {updateLowLevelCode};


const updateProductManufacturingRule = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductManufacturingRule method',
  args:{ruleId: {type: GraphQLString},productIdIn: {type: GraphQLString},fromDate: {type: GraphQLString},ruleOperator: {type: GraphQLString},quantity: {type: GraphQLFloat},productId: {type: GraphQLString},productIdFor: {type: GraphQLString},productIdInSubst: {type: GraphQLString},productFeature: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/manufacturingBom/updateProductManufacturingRule?ruleId=${args.ruleId}productIdIn=${args.productIdIn}fromDate=${args.fromDate}ruleOperator=${args.ruleOperator}quantity=${args.quantity}productId=${args.productId}productIdFor=${args.productIdFor}productIdInSubst=${args.productIdInSubst}productFeature=${args.productFeature}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductManufacturingRule};
