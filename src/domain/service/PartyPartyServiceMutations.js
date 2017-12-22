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


const createPartyClassificationType = {
  type: ResponseType,
  description: 'mutation for ofbiz createPartyClassificationType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},partyClassificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/createPartyClassificationType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}partyClassificationTypeId=${args.partyClassificationTypeId}`, null, req);
  }
};
export {createPartyClassificationType};


const createPartyContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz createPartyContentType method',
  args:{partyContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/createPartyContentType?partyContentTypeId=${args.partyContentTypeId}parentTypeId=${args.parentTypeId}description=${args.description}`, null, req);
  }
};
export {createPartyContentType};


const createPartyGeoPoint = {
  type: ResponseType,
  description: 'mutation for ofbiz createPartyGeoPoint method',
  args:{fromDate: {type: GraphQLString},partyId: {type: GraphQLString},geoPointId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/createPartyGeoPoint?fromDate=${args.fromDate}partyId=${args.partyId}geoPointId=${args.geoPointId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createPartyGeoPoint};


const createPartyIcsAvsOverride = {
  type: ResponseType,
  description: 'mutation for ofbiz createPartyIcsAvsOverride method',
  args:{partyId: {type: GraphQLString},avsDeclineString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/createPartyIcsAvsOverride?partyId=${args.partyId}avsDeclineString=${args.avsDeclineString}`, null, req);
  }
};
export {createPartyIcsAvsOverride};


const createPartyIdentificationType = {
  type: ResponseType,
  description: 'mutation for ofbiz createPartyIdentificationType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},partyIdentificationTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/createPartyIdentificationType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}partyIdentificationTypeId=${args.partyIdentificationTypeId}description=${args.description}`, null, req);
  }
};
export {createPartyIdentificationType};


const createPartyType = {
  type: ResponseType,
  description: 'mutation for ofbiz createPartyType method',
  args:{partyTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/createPartyType?partyTypeId=${args.partyTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createPartyType};


const createPartyTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createPartyTypeAttr method',
  args:{partyTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/createPartyTypeAttr?partyTypeId=${args.partyTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createPartyTypeAttr};


const createPriorityType = {
  type: ResponseType,
  description: 'mutation for ofbiz createPriorityType method',
  args:{priorityTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/createPriorityType?priorityTypeId=${args.priorityTypeId}description=${args.description}`, null, req);
  }
};
export {createPriorityType};


const deletePartyClassificationType = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePartyClassificationType method',
  args:{partyClassificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/deletePartyClassificationType?partyClassificationTypeId=${args.partyClassificationTypeId}`, null, req);
  }
};
export {deletePartyClassificationType};


const deletePartyContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePartyContentType method',
  args:{partyContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/deletePartyContentType?partyContentTypeId=${args.partyContentTypeId}`, null, req);
  }
};
export {deletePartyContentType};


const deletePartyIcsAvsOverride = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePartyIcsAvsOverride method',
  args:{partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/deletePartyIcsAvsOverride?partyId=${args.partyId}`, null, req);
  }
};
export {deletePartyIcsAvsOverride};


const deletePartyIdentificationType = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePartyIdentificationType method',
  args:{partyIdentificationTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/deletePartyIdentificationType?partyIdentificationTypeId=${args.partyIdentificationTypeId}`, null, req);
  }
};
export {deletePartyIdentificationType};


const deletePartyType = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePartyType method',
  args:{partyTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/deletePartyType?partyTypeId=${args.partyTypeId}`, null, req);
  }
};
export {deletePartyType};


const deletePartyTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePartyTypeAttr method',
  args:{partyTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/deletePartyTypeAttr?partyTypeId=${args.partyTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deletePartyTypeAttr};


const deletePriorityType = {
  type: ResponseType,
  description: 'mutation for ofbiz deletePriorityType method',
  args:{priorityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/deletePriorityType?priorityTypeId=${args.priorityTypeId}`, null, req);
  }
};
export {deletePriorityType};


const expirePartyGeoPoint = {
  type: ResponseType,
  description: 'mutation for ofbiz expirePartyGeoPoint method',
  args:{fromDate: {type: GraphQLString},partyId: {type: GraphQLString},geoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/expirePartyGeoPoint?fromDate=${args.fromDate}partyId=${args.partyId}geoPointId=${args.geoPointId}`, null, req);
  }
};
export {expirePartyGeoPoint};


const updatePartyClassificationType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePartyClassificationType method',
  args:{partyClassificationTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/updatePartyClassificationType?partyClassificationTypeId=${args.partyClassificationTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updatePartyClassificationType};


const updatePartyContentType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePartyContentType method',
  args:{partyContentTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/updatePartyContentType?partyContentTypeId=${args.partyContentTypeId}parentTypeId=${args.parentTypeId}description=${args.description}`, null, req);
  }
};
export {updatePartyContentType};


const updatePartyGeoPoint = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePartyGeoPoint method',
  args:{fromDate: {type: GraphQLString},partyId: {type: GraphQLString},geoPointId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/updatePartyGeoPoint?fromDate=${args.fromDate}partyId=${args.partyId}geoPointId=${args.geoPointId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updatePartyGeoPoint};


const updatePartyIcsAvsOverride = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePartyIcsAvsOverride method',
  args:{partyId: {type: GraphQLString},avsDeclineString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/updatePartyIcsAvsOverride?partyId=${args.partyId}avsDeclineString=${args.avsDeclineString}`, null, req);
  }
};
export {updatePartyIcsAvsOverride};


const updatePartyIdentificationType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePartyIdentificationType method',
  args:{partyIdentificationTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/updatePartyIdentificationType?partyIdentificationTypeId=${args.partyIdentificationTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updatePartyIdentificationType};


const updatePartyType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePartyType method',
  args:{partyTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/updatePartyType?partyTypeId=${args.partyTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updatePartyType};


const updatePartyTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePartyTypeAttr method',
  args:{partyTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/updatePartyTypeAttr?partyTypeId=${args.partyTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updatePartyTypeAttr};


const updatePriorityType = {
  type: ResponseType,
  description: 'mutation for ofbiz updatePriorityType method',
  args:{priorityTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/partyParty/updatePriorityType?priorityTypeId=${args.priorityTypeId}description=${args.description}`, null, req);
  }
};
export {updatePriorityType};
