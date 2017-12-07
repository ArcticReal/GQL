
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';


const PartyAttributeType = new GraphQLObjectType({
  name: 'PartyAttributeType',
  description: 'Type for PartyAttribute in party',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyAttribute, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyAttribute.partyId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {PartyAttributeType};
    