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


const createProductSubscriptionResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductSubscriptionResource method',
  args:{productId: {type: GraphQLString},subscriptionResourceId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},maxLifeTimeUomId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},canclAutmExtTimeUomId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},availableTimeUomId: {type: GraphQLString},thruDate: {type: GraphQLString},fromDate: {type: GraphQLString},canclAutmExtTime: {type: GraphQLInt},gracePeriodOnExpiryUomId: {type: GraphQLString},availableTime: {type: GraphQLInt},automaticExtend: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},maxLifeTime: {type: GraphQLInt},useTime: {type: GraphQLInt},purchaseThruDate: {type: GraphQLString},gracePeriodOnExpiry: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/createProductSubscriptionResource?productId=${args.productId}subscriptionResourceId=${args.subscriptionResourceId}purchaseFromDate=${args.purchaseFromDate}maxLifeTimeUomId=${args.maxLifeTimeUomId}useTimeUomId=${args.useTimeUomId}canclAutmExtTimeUomId=${args.canclAutmExtTimeUomId}useCountLimit=${args.useCountLimit}availableTimeUomId=${args.availableTimeUomId}thruDate=${args.thruDate}fromDate=${args.fromDate}canclAutmExtTime=${args.canclAutmExtTime}gracePeriodOnExpiryUomId=${args.gracePeriodOnExpiryUomId}availableTime=${args.availableTime}automaticExtend=${args.automaticExtend}useRoleTypeId=${args.useRoleTypeId}maxLifeTime=${args.maxLifeTime}useTime=${args.useTime}purchaseThruDate=${args.purchaseThruDate}gracePeriodOnExpiry=${args.gracePeriodOnExpiry}`, null, req);
  }
};
export {createProductSubscriptionResource};


const createSubscription = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSubscription method',
  args:{maxLifeTimeUomId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},orderId: {type: GraphQLString},subscriptionResourceId: {type: GraphQLString},description: {type: GraphQLString},subscriptionTypeId: {type: GraphQLString},canclAutmExtTimeUomId: {type: GraphQLString},contactMechId: {type: GraphQLString},gracePeriodOnExpiryUomId: {type: GraphQLString},availableTime: {type: GraphQLInt},productCategoryId: {type: GraphQLString},partyNeedId: {type: GraphQLString},useTime: {type: GraphQLInt},partyId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},roleTypeId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},needTypeId: {type: GraphQLString},productId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},expirationCompletedDate: {type: GraphQLString},availableTimeUomId: {type: GraphQLString},thruDate: {type: GraphQLString},inventoryItemId: {type: GraphQLString},fromDate: {type: GraphQLString},canclAutmExtTime: {type: GraphQLInt},originatedFromRoleTypeId: {type: GraphQLString},automaticExtend: {type: GraphQLString},originatedFromPartyId: {type: GraphQLString},communicationEventId: {type: GraphQLString},maxLifeTime: {type: GraphQLInt},purchaseThruDate: {type: GraphQLString},externalSubscriptionId: {type: GraphQLString},gracePeriodOnExpiry: {type: GraphQLInt},subscriptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/createSubscription?maxLifeTimeUomId=${args.maxLifeTimeUomId}useTimeUomId=${args.useTimeUomId}orderId=${args.orderId}subscriptionResourceId=${args.subscriptionResourceId}description=${args.description}subscriptionTypeId=${args.subscriptionTypeId}canclAutmExtTimeUomId=${args.canclAutmExtTimeUomId}contactMechId=${args.contactMechId}gracePeriodOnExpiryUomId=${args.gracePeriodOnExpiryUomId}availableTime=${args.availableTime}productCategoryId=${args.productCategoryId}partyNeedId=${args.partyNeedId}useTime=${args.useTime}partyId=${args.partyId}orderItemSeqId=${args.orderItemSeqId}roleTypeId=${args.roleTypeId}purchaseFromDate=${args.purchaseFromDate}needTypeId=${args.needTypeId}productId=${args.productId}useCountLimit=${args.useCountLimit}expirationCompletedDate=${args.expirationCompletedDate}availableTimeUomId=${args.availableTimeUomId}thruDate=${args.thruDate}inventoryItemId=${args.inventoryItemId}fromDate=${args.fromDate}canclAutmExtTime=${args.canclAutmExtTime}originatedFromRoleTypeId=${args.originatedFromRoleTypeId}automaticExtend=${args.automaticExtend}originatedFromPartyId=${args.originatedFromPartyId}communicationEventId=${args.communicationEventId}maxLifeTime=${args.maxLifeTime}purchaseThruDate=${args.purchaseThruDate}externalSubscriptionId=${args.externalSubscriptionId}gracePeriodOnExpiry=${args.gracePeriodOnExpiry}subscriptionId=${args.subscriptionId}`, null, req);
  }
};
export {createSubscription};


const createSubscriptionActivity = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSubscriptionActivity method',
  args:{comments: {type: GraphQLString},subscriptionActivityId: {type: GraphQLString},dateSent: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/createSubscriptionActivity?comments=${args.comments}subscriptionActivityId=${args.subscriptionActivityId}dateSent=${args.dateSent}`, null, req);
  }
};
export {createSubscriptionActivity};


const createSubscriptionAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSubscriptionAttribute method',
  args:{subscriptionId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/createSubscriptionAttribute?subscriptionId=${args.subscriptionId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createSubscriptionAttribute};


const createSubscriptionCommEvent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSubscriptionCommEvent method',
  args:{communicationEventId: {type: GraphQLString},subscriptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/createSubscriptionCommEvent?communicationEventId=${args.communicationEventId}subscriptionId=${args.subscriptionId}`, null, req);
  }
};
export {createSubscriptionCommEvent};


const createSubscriptionResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSubscriptionResource method',
  args:{serviceNameOnExpiry: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},parentResourceId: {type: GraphQLString},webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/createSubscriptionResource?serviceNameOnExpiry=${args.serviceNameOnExpiry}contentId=${args.contentId}description=${args.description}parentResourceId=${args.parentResourceId}webSiteId=${args.webSiteId}`, null, req);
  }
};
export {createSubscriptionResource};


const createSubscriptionType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSubscriptionType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},subscriptionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/createSubscriptionType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}subscriptionTypeId=${args.subscriptionTypeId}`, null, req);
  }
};
export {createSubscriptionType};


const createSubscriptionTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSubscriptionTypeAttr method',
  args:{subscriptionTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/createSubscriptionTypeAttr?subscriptionTypeId=${args.subscriptionTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createSubscriptionTypeAttr};


const deleteProductSubscriptionResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductSubscriptionResource method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},subscriptionResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/deleteProductSubscriptionResource?fromDate=${args.fromDate}productId=${args.productId}subscriptionResourceId=${args.subscriptionResourceId}`, null, req);
  }
};
export {deleteProductSubscriptionResource};


const deleteSubscriptionActivity = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSubscriptionActivity method',
  args:{subscriptionActivityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/deleteSubscriptionActivity?subscriptionActivityId=${args.subscriptionActivityId}`, null, req);
  }
};
export {deleteSubscriptionActivity};


const deleteSubscriptionAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSubscriptionAttribute method',
  args:{subscriptionId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/deleteSubscriptionAttribute?subscriptionId=${args.subscriptionId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteSubscriptionAttribute};


const deleteSubscriptionType = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSubscriptionType method',
  args:{subscriptionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/deleteSubscriptionType?subscriptionTypeId=${args.subscriptionTypeId}`, null, req);
  }
};
export {deleteSubscriptionType};


const deleteSubscriptionTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSubscriptionTypeAttr method',
  args:{subscriptionTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/deleteSubscriptionTypeAttr?subscriptionTypeId=${args.subscriptionTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteSubscriptionTypeAttr};


const getSubscriptionEnt = {
  type: ResopnseType,
  description: 'mutation for ofbiz getSubscriptionEnt method',
  args:{subscriptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/getSubscriptionEnt?subscriptionId=${args.subscriptionId}`, null, req);
  }
};
export {getSubscriptionEnt};


const isSubscribed = {
  type: ResopnseType,
  description: 'mutation for ofbiz isSubscribed method',
  args:{partyId: {type: GraphQLString},maxLifeTimeUomId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},orderId: {type: GraphQLString},subscriptionResourceId: {type: GraphQLString},description: {type: GraphQLString},subscriptionTypeId: {type: GraphQLString},canclAutmExtTimeUomId: {type: GraphQLString},contactMechId: {type: GraphQLString},gracePeriodOnExpiryUomId: {type: GraphQLString},availableTime: {type: GraphQLInt},productCategoryId: {type: GraphQLString},partyNeedId: {type: GraphQLString},useTime: {type: GraphQLInt},orderItemSeqId: {type: GraphQLString},roleTypeId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},needTypeId: {type: GraphQLString},productId: {type: GraphQLString},filterByDate: {type: GraphQLString},useCountLimit: {type: GraphQLInt},expirationCompletedDate: {type: GraphQLString},availableTimeUomId: {type: GraphQLString},thruDate: {type: GraphQLString},inventoryItemId: {type: GraphQLString},fromDate: {type: GraphQLString},canclAutmExtTime: {type: GraphQLInt},originatedFromRoleTypeId: {type: GraphQLString},automaticExtend: {type: GraphQLString},originatedFromPartyId: {type: GraphQLString},communicationEventId: {type: GraphQLString},maxLifeTime: {type: GraphQLInt},purchaseThruDate: {type: GraphQLString},externalSubscriptionId: {type: GraphQLString},gracePeriodOnExpiry: {type: GraphQLInt},subscriptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/isSubscribed?partyId=${args.partyId}maxLifeTimeUomId=${args.maxLifeTimeUomId}useTimeUomId=${args.useTimeUomId}orderId=${args.orderId}subscriptionResourceId=${args.subscriptionResourceId}description=${args.description}subscriptionTypeId=${args.subscriptionTypeId}canclAutmExtTimeUomId=${args.canclAutmExtTimeUomId}contactMechId=${args.contactMechId}gracePeriodOnExpiryUomId=${args.gracePeriodOnExpiryUomId}availableTime=${args.availableTime}productCategoryId=${args.productCategoryId}partyNeedId=${args.partyNeedId}useTime=${args.useTime}orderItemSeqId=${args.orderItemSeqId}roleTypeId=${args.roleTypeId}purchaseFromDate=${args.purchaseFromDate}needTypeId=${args.needTypeId}productId=${args.productId}filterByDate=${args.filterByDate}useCountLimit=${args.useCountLimit}expirationCompletedDate=${args.expirationCompletedDate}availableTimeUomId=${args.availableTimeUomId}thruDate=${args.thruDate}inventoryItemId=${args.inventoryItemId}fromDate=${args.fromDate}canclAutmExtTime=${args.canclAutmExtTime}originatedFromRoleTypeId=${args.originatedFromRoleTypeId}automaticExtend=${args.automaticExtend}originatedFromPartyId=${args.originatedFromPartyId}communicationEventId=${args.communicationEventId}maxLifeTime=${args.maxLifeTime}purchaseThruDate=${args.purchaseThruDate}externalSubscriptionId=${args.externalSubscriptionId}gracePeriodOnExpiry=${args.gracePeriodOnExpiry}subscriptionId=${args.subscriptionId}`, null, req);
  }
};
export {isSubscribed};


const processExtendSubscription = {
  type: ResopnseType,
  description: 'mutation for ofbiz processExtendSubscription method',
  args:{useTimeUomId: {type: GraphQLString},subscriptionResourceId: {type: GraphQLString},useTime: {type: GraphQLInt},partyId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},canclAutmExtTime: {type: GraphQLInt},gracePeriodOnExpiryUomId: {type: GraphQLString},alwaysCreateNewRecord: {type: GraphQLString},productId: {type: GraphQLString},orderId: {type: GraphQLString},automaticExtend: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},canclAutmExtTimeUomId: {type: GraphQLString},gracePeriodOnExpiry: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/processExtendSubscription?useTimeUomId=${args.useTimeUomId}subscriptionResourceId=${args.subscriptionResourceId}useTime=${args.useTime}partyId=${args.partyId}orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}canclAutmExtTime=${args.canclAutmExtTime}gracePeriodOnExpiryUomId=${args.gracePeriodOnExpiryUomId}alwaysCreateNewRecord=${args.alwaysCreateNewRecord}productId=${args.productId}orderId=${args.orderId}automaticExtend=${args.automaticExtend}useRoleTypeId=${args.useRoleTypeId}canclAutmExtTimeUomId=${args.canclAutmExtTimeUomId}gracePeriodOnExpiry=${args.gracePeriodOnExpiry}`, null, req);
  }
};
export {processExtendSubscription};


const processExtendSubscriptionByOrder = {
  type: ResopnseType,
  description: 'mutation for ofbiz processExtendSubscriptionByOrder method',
  args:{orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/processExtendSubscriptionByOrder?orderId=${args.orderId}`, null, req);
  }
};
export {processExtendSubscriptionByOrder};


const processExtendSubscriptionByProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz processExtendSubscriptionByProduct method',
  args:{quantity: {type: GraphQLInt},productId: {type: GraphQLString},partyId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},inventoryItemId: {type: GraphQLString},orderId: {type: GraphQLString},orderCreatedDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/processExtendSubscriptionByProduct?quantity=${args.quantity}productId=${args.productId}partyId=${args.partyId}orderItemSeqId=${args.orderItemSeqId}inventoryItemId=${args.inventoryItemId}orderId=${args.orderId}orderCreatedDate=${args.orderCreatedDate}`, null, req);
  }
};
export {processExtendSubscriptionByProduct};


const removeSubscriptionCommEvent = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeSubscriptionCommEvent method',
  args:{communicationEventId: {type: GraphQLString},subscriptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/removeSubscriptionCommEvent?communicationEventId=${args.communicationEventId}subscriptionId=${args.subscriptionId}`, null, req);
  }
};
export {removeSubscriptionCommEvent};


const runServiceOnSubscriptionExpiry = {
  type: ResopnseType,
  description: 'mutation for ofbiz runServiceOnSubscriptionExpiry method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/runServiceOnSubscriptionExpiry?`, null, req);
  }
};
export {runServiceOnSubscriptionExpiry};


const runSubscriptionExpired = {
  type: ResopnseType,
  description: 'mutation for ofbiz runSubscriptionExpired method',
  args:{subscriptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/runSubscriptionExpired?subscriptionId=${args.subscriptionId}`, null, req);
  }
};
export {runSubscriptionExpired};


const subscriptionPermissionCheck = {
  type: ResopnseType,
  description: 'mutation for ofbiz subscriptionPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/subscriptionPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {subscriptionPermissionCheck};


const updateProductSubscriptionResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductSubscriptionResource method',
  args:{fromDate: {type: GraphQLString},productId: {type: GraphQLString},subscriptionResourceId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},maxLifeTimeUomId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},canclAutmExtTimeUomId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},availableTimeUomId: {type: GraphQLString},thruDate: {type: GraphQLString},canclAutmExtTime: {type: GraphQLInt},gracePeriodOnExpiryUomId: {type: GraphQLString},availableTime: {type: GraphQLInt},automaticExtend: {type: GraphQLString},useRoleTypeId: {type: GraphQLString},maxLifeTime: {type: GraphQLInt},useTime: {type: GraphQLInt},purchaseThruDate: {type: GraphQLString},gracePeriodOnExpiry: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/updateProductSubscriptionResource?fromDate=${args.fromDate}productId=${args.productId}subscriptionResourceId=${args.subscriptionResourceId}purchaseFromDate=${args.purchaseFromDate}maxLifeTimeUomId=${args.maxLifeTimeUomId}useTimeUomId=${args.useTimeUomId}canclAutmExtTimeUomId=${args.canclAutmExtTimeUomId}useCountLimit=${args.useCountLimit}availableTimeUomId=${args.availableTimeUomId}thruDate=${args.thruDate}canclAutmExtTime=${args.canclAutmExtTime}gracePeriodOnExpiryUomId=${args.gracePeriodOnExpiryUomId}availableTime=${args.availableTime}automaticExtend=${args.automaticExtend}useRoleTypeId=${args.useRoleTypeId}maxLifeTime=${args.maxLifeTime}useTime=${args.useTime}purchaseThruDate=${args.purchaseThruDate}gracePeriodOnExpiry=${args.gracePeriodOnExpiry}`, null, req);
  }
};
export {updateProductSubscriptionResource};


const updateSubscription = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSubscription method',
  args:{subscriptionId: {type: GraphQLString},maxLifeTimeUomId: {type: GraphQLString},useTimeUomId: {type: GraphQLString},orderId: {type: GraphQLString},subscriptionResourceId: {type: GraphQLString},description: {type: GraphQLString},subscriptionTypeId: {type: GraphQLString},canclAutmExtTimeUomId: {type: GraphQLString},contactMechId: {type: GraphQLString},gracePeriodOnExpiryUomId: {type: GraphQLString},availableTime: {type: GraphQLInt},productCategoryId: {type: GraphQLString},partyNeedId: {type: GraphQLString},useTime: {type: GraphQLInt},partyId: {type: GraphQLString},orderItemSeqId: {type: GraphQLString},roleTypeId: {type: GraphQLString},purchaseFromDate: {type: GraphQLString},needTypeId: {type: GraphQLString},productId: {type: GraphQLString},useCountLimit: {type: GraphQLInt},expirationCompletedDate: {type: GraphQLString},availableTimeUomId: {type: GraphQLString},thruDate: {type: GraphQLString},inventoryItemId: {type: GraphQLString},fromDate: {type: GraphQLString},canclAutmExtTime: {type: GraphQLInt},originatedFromRoleTypeId: {type: GraphQLString},automaticExtend: {type: GraphQLString},originatedFromPartyId: {type: GraphQLString},communicationEventId: {type: GraphQLString},maxLifeTime: {type: GraphQLInt},purchaseThruDate: {type: GraphQLString},externalSubscriptionId: {type: GraphQLString},gracePeriodOnExpiry: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/updateSubscription?subscriptionId=${args.subscriptionId}maxLifeTimeUomId=${args.maxLifeTimeUomId}useTimeUomId=${args.useTimeUomId}orderId=${args.orderId}subscriptionResourceId=${args.subscriptionResourceId}description=${args.description}subscriptionTypeId=${args.subscriptionTypeId}canclAutmExtTimeUomId=${args.canclAutmExtTimeUomId}contactMechId=${args.contactMechId}gracePeriodOnExpiryUomId=${args.gracePeriodOnExpiryUomId}availableTime=${args.availableTime}productCategoryId=${args.productCategoryId}partyNeedId=${args.partyNeedId}useTime=${args.useTime}partyId=${args.partyId}orderItemSeqId=${args.orderItemSeqId}roleTypeId=${args.roleTypeId}purchaseFromDate=${args.purchaseFromDate}needTypeId=${args.needTypeId}productId=${args.productId}useCountLimit=${args.useCountLimit}expirationCompletedDate=${args.expirationCompletedDate}availableTimeUomId=${args.availableTimeUomId}thruDate=${args.thruDate}inventoryItemId=${args.inventoryItemId}fromDate=${args.fromDate}canclAutmExtTime=${args.canclAutmExtTime}originatedFromRoleTypeId=${args.originatedFromRoleTypeId}automaticExtend=${args.automaticExtend}originatedFromPartyId=${args.originatedFromPartyId}communicationEventId=${args.communicationEventId}maxLifeTime=${args.maxLifeTime}purchaseThruDate=${args.purchaseThruDate}externalSubscriptionId=${args.externalSubscriptionId}gracePeriodOnExpiry=${args.gracePeriodOnExpiry}`, null, req);
  }
};
export {updateSubscription};


const updateSubscriptionActivity = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSubscriptionActivity method',
  args:{subscriptionActivityId: {type: GraphQLString},comments: {type: GraphQLString},dateSent: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/updateSubscriptionActivity?subscriptionActivityId=${args.subscriptionActivityId}comments=${args.comments}dateSent=${args.dateSent}`, null, req);
  }
};
export {updateSubscriptionActivity};


const updateSubscriptionAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSubscriptionAttribute method',
  args:{subscriptionId: {type: GraphQLString},attrName: {type: GraphQLString},attrValue: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/updateSubscriptionAttribute?subscriptionId=${args.subscriptionId}attrName=${args.attrName}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateSubscriptionAttribute};


const updateSubscriptionResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSubscriptionResource method',
  args:{subscriptionResourceId: {type: GraphQLString},serviceNameOnExpiry: {type: GraphQLString},contentId: {type: GraphQLString},description: {type: GraphQLString},parentResourceId: {type: GraphQLString},webSiteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/updateSubscriptionResource?subscriptionResourceId=${args.subscriptionResourceId}serviceNameOnExpiry=${args.serviceNameOnExpiry}contentId=${args.contentId}description=${args.description}parentResourceId=${args.parentResourceId}webSiteId=${args.webSiteId}`, null, req);
  }
};
export {updateSubscriptionResource};


const updateSubscriptionType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSubscriptionType method',
  args:{subscriptionTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/updateSubscriptionType?subscriptionTypeId=${args.subscriptionTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateSubscriptionType};


const updateSubscriptionTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSubscriptionTypeAttr method',
  args:{subscriptionTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSubscription/updateSubscriptionTypeAttr?subscriptionTypeId=${args.subscriptionTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateSubscriptionTypeAttr};
