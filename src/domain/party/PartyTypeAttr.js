
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

import {PartyTypeType} from '../party/PartyType.js';


const PartyTypeAttrType = new GraphQLObjectType({
  name: 'PartyTypeAttrType',
  description: 'Type for PartyTypeAttr in party',

  fields: () => ({
    partyType: {
      type: PartyTypeType,
      args : {partyTypeId: {type: GraphQLString}},
      resolve: (partyTypeAttr, args, {loaders}) => loaders.ofbiz.load(`party/party/partyTypes/find?partyTypeId=${partyTypeAttr.partyTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {PartyTypeAttrType};
    




const PartyTypeAttrInputType = new GraphQLInputObjectType({
  name: 'PartyTypeAttrInputType',
  description: 'input type for PartyTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    partyTypeId: {type: GraphQLString}
  })
});

export {PartyTypeAttrInputType};
    