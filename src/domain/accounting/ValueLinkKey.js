
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



const ValueLinkKeyType = new GraphQLObjectType({
  name: 'ValueLinkKeyType',
  description: 'Type for ValueLinkKey in accounting',

  fields: () => ({
    workingKeyIndex: {type: GraphQLInt},
    lastModifiedDate: {type: GraphQLString},
    publicKey: {type: GraphQLString},
    privateKey: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    merchantId: {type: GraphQLString},
    workingKey: {type: GraphQLString},
    lastWorkingKey: {type: GraphQLString},
    exchangeKey: {type: GraphQLString},
    lastModifiedByTerminal: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdByTerminal: {type: GraphQLString}
  })
});

export {ValueLinkKeyType};
    




const ValueLinkKeyInputType = new GraphQLInputObjectType({
  name: 'ValueLinkKeyInputType',
  description: 'input type for ValueLinkKey',

  fields: () => ({
    createdByTerminal: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    exchangeKey: {type: GraphQLString},
    lastModifiedByTerminal: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    lastWorkingKey: {type: GraphQLString},
    merchantId: {type: GraphQLString},
    privateKey: {type: GraphQLString},
    publicKey: {type: GraphQLString},
    workingKey: {type: GraphQLString},
    workingKeyIndex: {type: GraphQLInt}
  })
});

export {ValueLinkKeyInputType};
    