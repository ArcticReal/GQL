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

const AcctgTransTypeAttrResponseType = new GraphQLObjectType({
  name: 'AcctgTransTypeAttrResponseType',
  description: 'response type for AcctgTransTypeAttr',

  fields: () => ({
    acctgTransTypeId: {type: GraphQLString},
    attrName: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {AcctgTransTypeAttrResponseType};
    