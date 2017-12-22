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

const ReturnContactMechResponseType = new GraphQLObjectType({
  name: 'ReturnContactMechResponseType',
  description: 'response type for ReturnContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    contactMechPurposeTypeId: {type: GraphQLString},
    returnId: {type: GraphQLString}
  })
});

export {ReturnContactMechResponseType};
    