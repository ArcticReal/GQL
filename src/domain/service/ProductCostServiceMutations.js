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


const calculateAllProductsCosts = {
  type: ResponseType,
  description: 'mutation for ofbiz calculateAllProductsCosts method',
  args:{costComponentTypePrefix: {type: GraphQLString},currencyUomId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/calculateAllProductsCosts?costComponentTypePrefix=${args.costComponentTypePrefix}currencyUomId=${args.currencyUomId}`, null, req);
  }
};
export {calculateAllProductsCosts};


const calculateProductAverageCost = {
  type: ResponseType,
  description: 'mutation for ofbiz calculateProductAverageCost method',
  args:{productId: {type: GraphQLString},ownerPartyId: {type: GraphQLString},facilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/calculateProductAverageCost?productId=${args.productId}ownerPartyId=${args.ownerPartyId}facilityId=${args.facilityId}`, null, req);
  }
};
export {calculateProductAverageCost};


const calculateProductCosts = {
  type: ResponseType,
  description: 'mutation for ofbiz calculateProductCosts method',
  args:{costComponentTypePrefix: {type: GraphQLString},currencyUomId: {type: GraphQLString},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/calculateProductCosts?costComponentTypePrefix=${args.costComponentTypePrefix}currencyUomId=${args.currencyUomId}productId=${args.productId}`, null, req);
  }
};
export {calculateProductCosts};


const cancelCostComponents = {
  type: ResponseType,
  description: 'mutation for ofbiz cancelCostComponents method',
  args:{costComponentTypeId: {type: GraphQLString},productId: {type: GraphQLString},costUomId: {type: GraphQLString},costComponentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/cancelCostComponents?costComponentTypeId=${args.costComponentTypeId}productId=${args.productId}costUomId=${args.costUomId}costComponentId=${args.costComponentId}`, null, req);
  }
};
export {cancelCostComponents};


const createCostComponent = {
  type: ResponseType,
  description: 'mutation for ofbiz createCostComponent method',
  args:{costComponentTypeId: {type: GraphQLString},workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},cost: {type: GraphQLFloat},productId: {type: GraphQLString},geoId: {type: GraphQLString},productFeatureId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},costUomId: {type: GraphQLString},partyId: {type: GraphQLString},costComponentCalcId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/createCostComponent?costComponentTypeId=${args.costComponentTypeId}workEffortId=${args.workEffortId}fromDate=${args.fromDate}cost=${args.cost}productId=${args.productId}geoId=${args.geoId}productFeatureId=${args.productFeatureId}fixedAssetId=${args.fixedAssetId}costUomId=${args.costUomId}partyId=${args.partyId}costComponentCalcId=${args.costComponentCalcId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createCostComponent};


const createCostComponentAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createCostComponentAttribute method',
  args:{attrName: {type: GraphQLString},costComponentId: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/createCostComponentAttribute?attrName=${args.attrName}costComponentId=${args.costComponentId}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createCostComponentAttribute};


const createCostComponentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createCostComponentType method',
  args:{costComponentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/createCostComponentType?costComponentTypeId=${args.costComponentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createCostComponentType};


const createCostComponentTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createCostComponentTypeAttr method',
  args:{costComponentTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/createCostComponentTypeAttr?costComponentTypeId=${args.costComponentTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createCostComponentTypeAttr};


const createProductCostComponentCalc = {
  type: ResponseType,
  description: 'mutation for ofbiz createProductCostComponentCalc method',
  args:{fromDate: {type: GraphQLString},costComponentTypeId: {type: GraphQLString},productId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},costComponentCalcId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/createProductCostComponentCalc?fromDate=${args.fromDate}costComponentTypeId=${args.costComponentTypeId}productId=${args.productId}sequenceNum=${args.sequenceNum}costComponentCalcId=${args.costComponentCalcId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductCostComponentCalc};


const deleteCostComponent = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCostComponent method',
  args:{costComponentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/deleteCostComponent?costComponentId=${args.costComponentId}`, null, req);
  }
};
export {deleteCostComponent};


const deleteCostComponentAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCostComponentAttribute method',
  args:{attrName: {type: GraphQLString},costComponentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/deleteCostComponentAttribute?attrName=${args.attrName}costComponentId=${args.costComponentId}`, null, req);
  }
};
export {deleteCostComponentAttribute};


const deleteCostComponentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCostComponentType method',
  args:{costComponentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/deleteCostComponentType?costComponentTypeId=${args.costComponentTypeId}`, null, req);
  }
};
export {deleteCostComponentType};


const deleteCostComponentTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteCostComponentTypeAttr method',
  args:{costComponentTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/deleteCostComponentTypeAttr?costComponentTypeId=${args.costComponentTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteCostComponentTypeAttr};


const deleteProductCostComponentCalc = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductCostComponentCalc method',
  args:{fromDate: {type: GraphQLString},costComponentTypeId: {type: GraphQLString},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/deleteProductCostComponentCalc?fromDate=${args.fromDate}costComponentTypeId=${args.costComponentTypeId}productId=${args.productId}`, null, req);
  }
};
export {deleteProductCostComponentCalc};


const getProductCost = {
  type: ResponseType,
  description: 'mutation for ofbiz getProductCost method',
  args:{costComponentTypePrefix: {type: GraphQLString},currencyUomId: {type: GraphQLString},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/getProductCost?costComponentTypePrefix=${args.costComponentTypePrefix}currencyUomId=${args.currencyUomId}productId=${args.productId}`, null, req);
  }
};
export {getProductCost};


const getTaskCost = {
  type: ResponseType,
  description: 'mutation for ofbiz getTaskCost method',
  args:{workEffortId: {type: GraphQLString},currencyUomId: {type: GraphQLString},routingId: {type: GraphQLString},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/getTaskCost?workEffortId=${args.workEffortId}currencyUomId=${args.currencyUomId}routingId=${args.routingId}productId=${args.productId}`, null, req);
  }
};
export {getTaskCost};


const productCostCalcInterface = {
  type: ResponseType,
  description: 'mutation for ofbiz productCostCalcInterface method',
  args:{productCostComponentCalc: {type: new GraphQLList(KeyValueInputType)},costComponentTypePrefix: {type: GraphQLString},baseCost: {type: GraphQLFloat},currencyUomId: {type: GraphQLString},costComponentCalc: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/productCostCalcInterface?productCostComponentCalc=${args.productCostComponentCalc}costComponentTypePrefix=${args.costComponentTypePrefix}baseCost=${args.baseCost}currencyUomId=${args.currencyUomId}costComponentCalc=${args.costComponentCalc}`, null, req);
  }
};
export {productCostCalcInterface};


const productCostPercentageFormula = {
  type: ResponseType,
  description: 'mutation for ofbiz productCostPercentageFormula method',
  args:{productCostComponentCalc: {type: new GraphQLList(KeyValueInputType)},costComponentTypePrefix: {type: GraphQLString},baseCost: {type: GraphQLFloat},currencyUomId: {type: GraphQLString},costComponentCalc: {type: new GraphQLList(KeyValueInputType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/productCostPercentageFormula?productCostComponentCalc=${args.productCostComponentCalc}costComponentTypePrefix=${args.costComponentTypePrefix}baseCost=${args.baseCost}currencyUomId=${args.currencyUomId}costComponentCalc=${args.costComponentCalc}`, null, req);
  }
};
export {productCostPercentageFormula};


const recreateCostComponent = {
  type: ResponseType,
  description: 'mutation for ofbiz recreateCostComponent method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},costComponentTypeId: {type: GraphQLString},cost: {type: GraphQLFloat},productId: {type: GraphQLString},geoId: {type: GraphQLString},productFeatureId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},costUomId: {type: GraphQLString},partyId: {type: GraphQLString},costComponentCalcId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/recreateCostComponent?workEffortId=${args.workEffortId}fromDate=${args.fromDate}costComponentTypeId=${args.costComponentTypeId}cost=${args.cost}productId=${args.productId}geoId=${args.geoId}productFeatureId=${args.productFeatureId}fixedAssetId=${args.fixedAssetId}costUomId=${args.costUomId}partyId=${args.partyId}costComponentCalcId=${args.costComponentCalcId}thruDate=${args.thruDate}`, null, req);
  }
};
export {recreateCostComponent};


const updateCostComponent = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCostComponent method',
  args:{costComponentId: {type: GraphQLString},workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},costComponentTypeId: {type: GraphQLString},cost: {type: GraphQLFloat},productId: {type: GraphQLString},geoId: {type: GraphQLString},productFeatureId: {type: GraphQLString},fixedAssetId: {type: GraphQLString},costUomId: {type: GraphQLString},partyId: {type: GraphQLString},costComponentCalcId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/updateCostComponent?costComponentId=${args.costComponentId}workEffortId=${args.workEffortId}fromDate=${args.fromDate}costComponentTypeId=${args.costComponentTypeId}cost=${args.cost}productId=${args.productId}geoId=${args.geoId}productFeatureId=${args.productFeatureId}fixedAssetId=${args.fixedAssetId}costUomId=${args.costUomId}partyId=${args.partyId}costComponentCalcId=${args.costComponentCalcId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateCostComponent};


const updateCostComponentAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCostComponentAttribute method',
  args:{attrName: {type: GraphQLString},costComponentId: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/updateCostComponentAttribute?attrName=${args.attrName}costComponentId=${args.costComponentId}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateCostComponentAttribute};


const updateCostComponentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCostComponentType method',
  args:{costComponentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/updateCostComponentType?costComponentTypeId=${args.costComponentTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateCostComponentType};


const updateCostComponentTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateCostComponentTypeAttr method',
  args:{costComponentTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/updateCostComponentTypeAttr?costComponentTypeId=${args.costComponentTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateCostComponentTypeAttr};


const updateProductCostComponentCalc = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProductCostComponentCalc method',
  args:{fromDate: {type: GraphQLString},costComponentTypeId: {type: GraphQLString},productId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},costComponentCalcId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productCost/updateProductCostComponentCalc?fromDate=${args.fromDate}costComponentTypeId=${args.costComponentTypeId}productId=${args.productId}sequenceNum=${args.sequenceNum}costComponentCalcId=${args.costComponentCalcId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductCostComponentCalc};
