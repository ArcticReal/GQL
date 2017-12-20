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
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const applyFeatureToProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz applyFeatureToProduct method',
  args:{productId: {type: GraphQLString},productFeatureId: {type: GraphQLString},productFeatureApplTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},amount: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},recurringAmount: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/applyFeatureToProduct?productId=${args.productId}productFeatureId=${args.productFeatureId}productFeatureApplTypeId=${args.productFeatureApplTypeId}fromDate=${args.fromDate}amount=${args.amount}sequenceNum=${args.sequenceNum}recurringAmount=${args.recurringAmount}thruDate=${args.thruDate}`, null, req);
  }
};
export {applyFeatureToProduct};


const applyFeatureToProductFromTypeAndCode = {
  type: ResopnseType,
  description: 'mutation for ofbiz applyFeatureToProductFromTypeAndCode method',
  args:{productFeatureTypeId: {type: GraphQLString},productId: {type: GraphQLString},idCode: {type: GraphQLString},productFeatureApplTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/applyFeatureToProductFromTypeAndCode?productFeatureTypeId=${args.productFeatureTypeId}productId=${args.productId}idCode=${args.idCode}productFeatureApplTypeId=${args.productFeatureApplTypeId}fromDate=${args.fromDate}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {applyFeatureToProductFromTypeAndCode};


const createFeaturePrice = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFeaturePrice method',
  args:{currencyUomId: {type: GraphQLString},price: {type: GraphQLFloat},productPriceTypeId: {type: GraphQLString},fromDate: {type: GraphQLString},productFeatureId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/createFeaturePrice?currencyUomId=${args.currencyUomId}price=${args.price}productPriceTypeId=${args.productPriceTypeId}fromDate=${args.fromDate}productFeatureId=${args.productFeatureId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createFeaturePrice};


const createProductFeature = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeature method',
  args:{productFeatureTypeId: {type: GraphQLString},description: {type: GraphQLString},defaultSequenceNum: {type: GraphQLInt},defaultAmount: {type: GraphQLFloat},idCode: {type: GraphQLString},productFeatureId: {type: GraphQLString},numberSpecified: {type: GraphQLFloat},productFeatureCategoryId: {type: GraphQLString},uomId: {type: GraphQLString},abbrev: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/createProductFeature?productFeatureTypeId=${args.productFeatureTypeId}description=${args.description}defaultSequenceNum=${args.defaultSequenceNum}defaultAmount=${args.defaultAmount}idCode=${args.idCode}productFeatureId=${args.productFeatureId}numberSpecified=${args.numberSpecified}productFeatureCategoryId=${args.productFeatureCategoryId}uomId=${args.uomId}abbrev=${args.abbrev}`, null, req);
  }
};
export {createProductFeature};


const createProductFeatureApplAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureApplAttr method',
  args:{productId: {type: GraphQLString},productFeatureId: {type: GraphQLString},attrName: {type: GraphQLString},fromDate: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/createProductFeatureApplAttr?productId=${args.productId}productFeatureId=${args.productFeatureId}attrName=${args.attrName}fromDate=${args.fromDate}attrValue=${args.attrValue}`, null, req);
  }
};
export {createProductFeatureApplAttr};


const createProductFeatureApplType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureApplType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},productFeatureApplTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/createProductFeatureApplType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}productFeatureApplTypeId=${args.productFeatureApplTypeId}description=${args.description}`, null, req);
  }
};
export {createProductFeatureApplType};


const createProductFeatureCatGrpAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureCatGrpAppl method',
  args:{productCategoryId: {type: GraphQLString},productFeatureGroupId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/createProductFeatureCatGrpAppl?productCategoryId=${args.productCategoryId}productFeatureGroupId=${args.productFeatureGroupId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductFeatureCatGrpAppl};


const createProductFeatureCategory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureCategory method',
  args:{description: {type: GraphQLString},parentCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/createProductFeatureCategory?description=${args.description}parentCategoryId=${args.parentCategoryId}`, null, req);
  }
};
export {createProductFeatureCategory};


const createProductFeatureCategoryAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureCategoryAppl method',
  args:{productCategoryId: {type: GraphQLString},productFeatureCategoryId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/createProductFeatureCategoryAppl?productCategoryId=${args.productCategoryId}productFeatureCategoryId=${args.productFeatureCategoryId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductFeatureCategoryAppl};


const createProductFeatureGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureGroup method',
  args:{description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/createProductFeatureGroup?description=${args.description}`, null, req);
  }
};
export {createProductFeatureGroup};


const createProductFeatureGroupAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureGroupAppl method',
  args:{productFeatureId: {type: GraphQLString},productFeatureGroupId: {type: GraphQLString},fromDate: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/createProductFeatureGroupAppl?productFeatureId=${args.productFeatureId}productFeatureGroupId=${args.productFeatureGroupId}fromDate=${args.fromDate}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {createProductFeatureGroupAppl};


const createProductFeatureIactn = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureIactn method',
  args:{productFeatureIactnTypeId: {type: GraphQLString},productFeatureId: {type: GraphQLString},productFeatureIdTo: {type: GraphQLString},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/createProductFeatureIactn?productFeatureIactnTypeId=${args.productFeatureIactnTypeId}productFeatureId=${args.productFeatureId}productFeatureIdTo=${args.productFeatureIdTo}productId=${args.productId}`, null, req);
  }
};
export {createProductFeatureIactn};


const createProductFeatureIactnType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureIactnType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},productFeatureIactnTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/createProductFeatureIactnType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}productFeatureIactnTypeId=${args.productFeatureIactnTypeId}description=${args.description}`, null, req);
  }
};
export {createProductFeatureIactnType};


const createProductFeatureType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductFeatureType method',
  args:{productFeatureTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/createProductFeatureType?productFeatureTypeId=${args.productFeatureTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createProductFeatureType};


const deleteFeaturePrice = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFeaturePrice method',
  args:{fromDate: {type: GraphQLString},currencyUomId: {type: GraphQLString},productFeatureId: {type: GraphQLString},productPriceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/deleteFeaturePrice?fromDate=${args.fromDate}currencyUomId=${args.currencyUomId}productFeatureId=${args.productFeatureId}productPriceTypeId=${args.productPriceTypeId}`, null, req);
  }
};
export {deleteFeaturePrice};


const deleteProductFeatureApplType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFeatureApplType method',
  args:{productFeatureApplTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/deleteProductFeatureApplType?productFeatureApplTypeId=${args.productFeatureApplTypeId}`, null, req);
  }
};
export {deleteProductFeatureApplType};


const deleteProductFeatureIactnType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductFeatureIactnType method',
  args:{productFeatureIactnTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/deleteProductFeatureIactnType?productFeatureIactnTypeId=${args.productFeatureIactnTypeId}`, null, req);
  }
};
export {deleteProductFeatureIactnType};


const removeFeatureFromProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeFeatureFromProduct method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},productFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/removeFeatureFromProduct?fromDate=${args.fromDate}productId=${args.productId}productFeatureId=${args.productFeatureId}`, null, req);
  }
};
export {removeFeatureFromProduct};


const removeProductFeatureApplAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeProductFeatureApplAttr method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},productFeatureId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/removeProductFeatureApplAttr?fromDate=${args.fromDate}productId=${args.productId}productFeatureId=${args.productFeatureId}attrName=${args.attrName}`, null, req);
  }
};
export {removeProductFeatureApplAttr};


const removeProductFeatureCatGrpAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeProductFeatureCatGrpAppl method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},productFeatureGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/removeProductFeatureCatGrpAppl?fromDate=${args.fromDate}productCategoryId=${args.productCategoryId}productFeatureGroupId=${args.productFeatureGroupId}`, null, req);
  }
};
export {removeProductFeatureCatGrpAppl};


const removeProductFeatureCategoryAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeProductFeatureCategoryAppl method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},productFeatureCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/removeProductFeatureCategoryAppl?fromDate=${args.fromDate}productCategoryId=${args.productCategoryId}productFeatureCategoryId=${args.productFeatureCategoryId}`, null, req);
  }
};
export {removeProductFeatureCategoryAppl};


const removeProductFeatureGroupAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeProductFeatureGroupAppl method',
  args:{fromDate: {type: GraphQLString},productFeatureId: {type: GraphQLString},productFeatureGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/removeProductFeatureGroupAppl?fromDate=${args.fromDate}productFeatureId=${args.productFeatureId}productFeatureGroupId=${args.productFeatureGroupId}`, null, req);
  }
};
export {removeProductFeatureGroupAppl};


const removeProductFeatureIactn = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeProductFeatureIactn method',
  args:{productFeatureId: {type: GraphQLString},productFeatureIdTo: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/removeProductFeatureIactn?productFeatureId=${args.productFeatureId}productFeatureIdTo=${args.productFeatureIdTo}`, null, req);
  }
};
export {removeProductFeatureIactn};


const removeProductFeatureType = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeProductFeatureType method',
  args:{productFeatureTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/removeProductFeatureType?productFeatureTypeId=${args.productFeatureTypeId}`, null, req);
  }
};
export {removeProductFeatureType};


const updateFeaturePrice = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFeaturePrice method',
  args:{fromDate: {type: GraphQLString},currencyUomId: {type: GraphQLString},price: {type: GraphQLFloat},productFeatureId: {type: GraphQLString},productPriceTypeId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/updateFeaturePrice?fromDate=${args.fromDate}currencyUomId=${args.currencyUomId}price=${args.price}productFeatureId=${args.productFeatureId}productPriceTypeId=${args.productPriceTypeId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFeaturePrice};


const updateFeatureToProductApplication = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFeatureToProductApplication method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},productFeatureId: {type: GraphQLString},productFeatureApplTypeId: {type: GraphQLString},amount: {type: GraphQLFloat},sequenceNum: {type: GraphQLInt},recurringAmount: {type: GraphQLFloat},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/updateFeatureToProductApplication?fromDate=${args.fromDate}productId=${args.productId}productFeatureId=${args.productFeatureId}productFeatureApplTypeId=${args.productFeatureApplTypeId}amount=${args.amount}sequenceNum=${args.sequenceNum}recurringAmount=${args.recurringAmount}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFeatureToProductApplication};


const updateProductFeature = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeature method',
  args:{productFeatureTypeId: {type: GraphQLString},productFeatureId: {type: GraphQLString},description: {type: GraphQLString},defaultSequenceNum: {type: GraphQLInt},defaultAmount: {type: GraphQLFloat},idCode: {type: GraphQLString},numberSpecified: {type: GraphQLFloat},productFeatureCategoryId: {type: GraphQLString},uomId: {type: GraphQLString},abbrev: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/updateProductFeature?productFeatureTypeId=${args.productFeatureTypeId}productFeatureId=${args.productFeatureId}description=${args.description}defaultSequenceNum=${args.defaultSequenceNum}defaultAmount=${args.defaultAmount}idCode=${args.idCode}numberSpecified=${args.numberSpecified}productFeatureCategoryId=${args.productFeatureCategoryId}uomId=${args.uomId}abbrev=${args.abbrev}`, null, req);
  }
};
export {updateProductFeature};


const updateProductFeatureApplAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureApplAttr method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},productFeatureId: {type: GraphQLString},attrName: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/updateProductFeatureApplAttr?fromDate=${args.fromDate}productId=${args.productId}productFeatureId=${args.productFeatureId}attrName=${args.attrName}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateProductFeatureApplAttr};


const updateProductFeatureApplType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureApplType method',
  args:{productFeatureApplTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/updateProductFeatureApplType?productFeatureApplTypeId=${args.productFeatureApplTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateProductFeatureApplType};


const updateProductFeatureCatGrpAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureCatGrpAppl method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},productFeatureGroupId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/updateProductFeatureCatGrpAppl?fromDate=${args.fromDate}productCategoryId=${args.productCategoryId}productFeatureGroupId=${args.productFeatureGroupId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductFeatureCatGrpAppl};


const updateProductFeatureCategory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureCategory method',
  args:{productFeatureCategoryId: {type: GraphQLString},description: {type: GraphQLString},parentCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/updateProductFeatureCategory?productFeatureCategoryId=${args.productFeatureCategoryId}description=${args.description}parentCategoryId=${args.parentCategoryId}`, null, req);
  }
};
export {updateProductFeatureCategory};


const updateProductFeatureCategoryAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureCategoryAppl method',
  args:{fromDate: {type: GraphQLString},productCategoryId: {type: GraphQLString},productFeatureCategoryId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/updateProductFeatureCategoryAppl?fromDate=${args.fromDate}productCategoryId=${args.productCategoryId}productFeatureCategoryId=${args.productFeatureCategoryId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductFeatureCategoryAppl};


const updateProductFeatureGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureGroup method',
  args:{productFeatureGroupId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/updateProductFeatureGroup?productFeatureGroupId=${args.productFeatureGroupId}description=${args.description}`, null, req);
  }
};
export {updateProductFeatureGroup};


const updateProductFeatureGroupAppl = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureGroupAppl method',
  args:{fromDate: {type: GraphQLString},productFeatureId: {type: GraphQLString},productFeatureGroupId: {type: GraphQLString},sequenceNum: {type: GraphQLInt},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/updateProductFeatureGroupAppl?fromDate=${args.fromDate}productFeatureId=${args.productFeatureId}productFeatureGroupId=${args.productFeatureGroupId}sequenceNum=${args.sequenceNum}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateProductFeatureGroupAppl};


const updateProductFeatureIactnType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureIactnType method',
  args:{productFeatureIactnTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/updateProductFeatureIactnType?productFeatureIactnTypeId=${args.productFeatureIactnTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateProductFeatureIactnType};


const updateProductFeatureType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductFeatureType method',
  args:{productFeatureTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productFeature/updateProductFeatureType?productFeatureTypeId=${args.productFeatureTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateProductFeatureType};
