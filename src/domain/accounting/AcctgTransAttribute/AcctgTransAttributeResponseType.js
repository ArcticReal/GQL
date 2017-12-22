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

const AcctgTransAttributeResponseType = new GraphQLObjectType({
  name: 'AcctgTransAttributeResponseType',
  description: 'response type for AcctgTransAttribute',

  fields: () => ({
    acctgTransId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString}
  })
});

export {AcctgTransAttributeResponseType};
    