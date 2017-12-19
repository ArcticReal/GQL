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

const AcctgTransAttributeInputType = new GraphQLInputObjectType({
  name: 'AcctgTransAttributeInputType',
  description: 'input type for AcctgTransAttribute',

  fields: () => ({
    acctgTransId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString}
  })
});

export {AcctgTransAttributeInputType};
    