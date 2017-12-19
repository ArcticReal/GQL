
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

import {PartyTypeType} from '../../party/PartyType/PartyTypeType.js';


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
    