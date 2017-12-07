
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyTypeType} from '../party/PartyTypeType.js';


const PartyTypeAttrType = new GraphQLObjectType({
  name: 'PartyTypeAttrType',
  description: 'Type for PartyTypeAttr in party',

  fields: () => ({
    partyType: {
      type: PartyTypeType,
      args : {partyTypeId: {type: GraphQLString}},
      resolve: (partyTypeAttr, args, {loaders}) => loaders.ofbiz.load(`partyTypes/find?partyTypeId=${partyTypeAttr.partyTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {PartyTypeAttrType};
    