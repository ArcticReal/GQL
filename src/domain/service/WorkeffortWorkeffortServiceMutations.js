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


const createApplicationSandbox = {
  type: ResponseType,
  description: 'mutation for ofbiz createApplicationSandbox method',
  args:{workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},applicationId: {type: GraphQLString},partyId: {type: GraphQLString},runtimeDataId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/createApplicationSandbox?workEffortId=${args.workEffortId}fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}applicationId=${args.applicationId}partyId=${args.partyId}runtimeDataId=${args.runtimeDataId}`, null, req);
  }
};
export {createApplicationSandbox};


const createDeliverable = {
  type: ResponseType,
  description: 'mutation for ofbiz createDeliverable method',
  args:{deliverableName: {type: GraphQLString},deliverableTypeId: {type: GraphQLString},description: {type: GraphQLString},deliverableId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/createDeliverable?deliverableName=${args.deliverableName}deliverableTypeId=${args.deliverableTypeId}description=${args.description}deliverableId=${args.deliverableId}`, null, req);
  }
};
export {createDeliverable};


const createDeliverableType = {
  type: ResponseType,
  description: 'mutation for ofbiz createDeliverableType method',
  args:{deliverableTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/createDeliverableType?deliverableTypeId=${args.deliverableTypeId}description=${args.description}`, null, req);
  }
};
export {createDeliverableType};


const createWorkEffortAssocAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortAssocAttribute method',
  args:{workEffortIdTo: {type: GraphQLString},workEffortIdFrom: {type: GraphQLString},workEffortAssocTypeId: {type: GraphQLString},attrName: {type: GraphQLString},fromDate: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/createWorkEffortAssocAttribute?workEffortIdTo=${args.workEffortIdTo}workEffortIdFrom=${args.workEffortIdFrom}workEffortAssocTypeId=${args.workEffortAssocTypeId}attrName=${args.attrName}fromDate=${args.fromDate}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createWorkEffortAssocAttribute};


const createWorkEffortAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortAssocType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},workEffortAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/createWorkEffortAssocType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}workEffortAssocTypeId=${args.workEffortAssocTypeId}`, null, req);
  }
};
export {createWorkEffortAssocType};


const createWorkEffortAssocTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortAssocTypeAttr method',
  args:{workEffortAssocTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/createWorkEffortAssocTypeAttr?workEffortAssocTypeId=${args.workEffortAssocTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createWorkEffortAssocTypeAttr};


const createWorkEffortBilling = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortBilling method',
  args:{workEffortId: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},percentage: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/createWorkEffortBilling?workEffortId=${args.workEffortId}invoiceId=${args.invoiceId}invoiceItemSeqId=${args.invoiceItemSeqId}percentage=${args.percentage}`, null, req);
  }
};
export {createWorkEffortBilling};


const createWorkEffortContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortContentType method',
  args:{workEffortContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/createWorkEffortContentType?workEffortContentTypeId=${args.workEffortContentTypeId}parentTypeId=${args.parentTypeId}description=${args.description}`, null, req);
  }
};
export {createWorkEffortContentType};


const createWorkEffortGoodStandardType = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortGoodStandardType method',
  args:{workEffortGoodStdTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/createWorkEffortGoodStandardType?workEffortGoodStdTypeId=${args.workEffortGoodStdTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createWorkEffortGoodStandardType};


const createWorkEffortPurposeType = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortPurposeType method',
  args:{parentTypeId: {type: GraphQLString},workEffortPurposeTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/createWorkEffortPurposeType?parentTypeId=${args.parentTypeId}workEffortPurposeTypeId=${args.workEffortPurposeTypeId}description=${args.description}`, null, req);
  }
};
export {createWorkEffortPurposeType};


const createWorkEffortType = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortType method',
  args:{parentTypeId: {type: GraphQLString},workEffortTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/createWorkEffortType?parentTypeId=${args.parentTypeId}workEffortTypeId=${args.workEffortTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createWorkEffortType};


const createWorkEffortTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createWorkEffortTypeAttr method',
  args:{workEffortTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/createWorkEffortTypeAttr?workEffortTypeId=${args.workEffortTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createWorkEffortTypeAttr};


const deleteApplicationSandbox = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteApplicationSandbox method',
  args:{applicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/deleteApplicationSandbox?applicationId=${args.applicationId}`, null, req);
  }
};
export {deleteApplicationSandbox};


const deleteDeliverable = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteDeliverable method',
  args:{deliverableId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/deleteDeliverable?deliverableId=${args.deliverableId}`, null, req);
  }
};
export {deleteDeliverable};


const deleteDeliverableType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteDeliverableType method',
  args:{deliverableTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/deleteDeliverableType?deliverableTypeId=${args.deliverableTypeId}`, null, req);
  }
};
export {deleteDeliverableType};


const deleteWorkEffortAssocAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortAssocAttribute method',
  args:{workEffortIdTo: {type: GraphQLString},workEffortIdFrom: {type: GraphQLString},workEffortAssocTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/deleteWorkEffortAssocAttribute?workEffortIdTo=${args.workEffortIdTo}workEffortIdFrom=${args.workEffortIdFrom}workEffortAssocTypeId=${args.workEffortAssocTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteWorkEffortAssocAttribute};


const deleteWorkEffortAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortAssocType method',
  args:{workEffortAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/deleteWorkEffortAssocType?workEffortAssocTypeId=${args.workEffortAssocTypeId}`, null, req);
  }
};
export {deleteWorkEffortAssocType};


const deleteWorkEffortAssocTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortAssocTypeAttr method',
  args:{workEffortAssocTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/deleteWorkEffortAssocTypeAttr?workEffortAssocTypeId=${args.workEffortAssocTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteWorkEffortAssocTypeAttr};


const deleteWorkEffortBilling = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortBilling method',
  args:{workEffortId: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/deleteWorkEffortBilling?workEffortId=${args.workEffortId}invoiceId=${args.invoiceId}invoiceItemSeqId=${args.invoiceItemSeqId}`, null, req);
  }
};
export {deleteWorkEffortBilling};


const deleteWorkEffortContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortContentType method',
  args:{workEffortContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/deleteWorkEffortContentType?workEffortContentTypeId=${args.workEffortContentTypeId}`, null, req);
  }
};
export {deleteWorkEffortContentType};


const deleteWorkEffortGoodStandardType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortGoodStandardType method',
  args:{workEffortGoodStdTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/deleteWorkEffortGoodStandardType?workEffortGoodStdTypeId=${args.workEffortGoodStdTypeId}`, null, req);
  }
};
export {deleteWorkEffortGoodStandardType};


const deleteWorkEffortPurposeType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortPurposeType method',
  args:{workEffortPurposeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/deleteWorkEffortPurposeType?workEffortPurposeTypeId=${args.workEffortPurposeTypeId}`, null, req);
  }
};
export {deleteWorkEffortPurposeType};


const deleteWorkEffortType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortType method',
  args:{workEffortTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/deleteWorkEffortType?workEffortTypeId=${args.workEffortTypeId}`, null, req);
  }
};
export {deleteWorkEffortType};


const deleteWorkEffortTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteWorkEffortTypeAttr method',
  args:{workEffortTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/deleteWorkEffortTypeAttr?workEffortTypeId=${args.workEffortTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteWorkEffortTypeAttr};


const updateApplicationSandbox = {
  type: ResponseType,
  description: 'mutation for ofbiz updateApplicationSandbox method',
  args:{applicationId: {type: GraphQLString},workEffortId: {type: GraphQLString},fromDate: {type: GraphQLString},roleTypeId: {type: GraphQLString},partyId: {type: GraphQLString},runtimeDataId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/updateApplicationSandbox?applicationId=${args.applicationId}workEffortId=${args.workEffortId}fromDate=${args.fromDate}roleTypeId=${args.roleTypeId}partyId=${args.partyId}runtimeDataId=${args.runtimeDataId}`, null, req);
  }
};
export {updateApplicationSandbox};


const updateDeliverable = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDeliverable method',
  args:{deliverableId: {type: GraphQLString},deliverableName: {type: GraphQLString},deliverableTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/updateDeliverable?deliverableId=${args.deliverableId}deliverableName=${args.deliverableName}deliverableTypeId=${args.deliverableTypeId}description=${args.description}`, null, req);
  }
};
export {updateDeliverable};


const updateDeliverableType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateDeliverableType method',
  args:{deliverableTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/updateDeliverableType?deliverableTypeId=${args.deliverableTypeId}description=${args.description}`, null, req);
  }
};
export {updateDeliverableType};


const updateWorkEffortAssocAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortAssocAttribute method',
  args:{workEffortIdTo: {type: GraphQLString},workEffortIdFrom: {type: GraphQLString},workEffortAssocTypeId: {type: GraphQLString},attrName: {type: GraphQLString},fromDate: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/updateWorkEffortAssocAttribute?workEffortIdTo=${args.workEffortIdTo}workEffortIdFrom=${args.workEffortIdFrom}workEffortAssocTypeId=${args.workEffortAssocTypeId}attrName=${args.attrName}fromDate=${args.fromDate}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateWorkEffortAssocAttribute};


const updateWorkEffortAssocType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortAssocType method',
  args:{workEffortAssocTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/updateWorkEffortAssocType?workEffortAssocTypeId=${args.workEffortAssocTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateWorkEffortAssocType};


const updateWorkEffortAssocTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortAssocTypeAttr method',
  args:{workEffortAssocTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/updateWorkEffortAssocTypeAttr?workEffortAssocTypeId=${args.workEffortAssocTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateWorkEffortAssocTypeAttr};


const updateWorkEffortBilling = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortBilling method',
  args:{workEffortId: {type: GraphQLString},invoiceId: {type: GraphQLString},invoiceItemSeqId: {type: GraphQLString},percentage: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/updateWorkEffortBilling?workEffortId=${args.workEffortId}invoiceId=${args.invoiceId}invoiceItemSeqId=${args.invoiceItemSeqId}percentage=${args.percentage}`, null, req);
  }
};
export {updateWorkEffortBilling};


const updateWorkEffortContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortContentType method',
  args:{workEffortContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/updateWorkEffortContentType?workEffortContentTypeId=${args.workEffortContentTypeId}parentTypeId=${args.parentTypeId}description=${args.description}`, null, req);
  }
};
export {updateWorkEffortContentType};


const updateWorkEffortGoodStandardType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortGoodStandardType method',
  args:{workEffortGoodStdTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/updateWorkEffortGoodStandardType?workEffortGoodStdTypeId=${args.workEffortGoodStdTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateWorkEffortGoodStandardType};


const updateWorkEffortPurposeType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortPurposeType method',
  args:{workEffortPurposeTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/updateWorkEffortPurposeType?workEffortPurposeTypeId=${args.workEffortPurposeTypeId}parentTypeId=${args.parentTypeId}description=${args.description}`, null, req);
  }
};
export {updateWorkEffortPurposeType};


const updateWorkEffortType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortType method',
  args:{workEffortTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/updateWorkEffortType?workEffortTypeId=${args.workEffortTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateWorkEffortType};


const updateWorkEffortTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateWorkEffortTypeAttr method',
  args:{workEffortTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/workeffortWorkeffort/updateWorkEffortTypeAttr?workEffortTypeId=${args.workEffortTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateWorkEffortTypeAttr};
