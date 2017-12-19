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

const ReturnContactMechInputType = new GraphQLInputObjectType({
  name: 'ReturnContactMechInputType',
  description: 'input type for ReturnContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    contactMechPurposeTypeId: {type: GraphQLString},
    returnId: {type: GraphQLString}
  })
});

export {ReturnContactMechInputType};
    