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

const AcctgTransTypeAttrInputType = new GraphQLInputObjectType({
  name: 'AcctgTransTypeAttrInputType',
  description: 'input type for AcctgTransTypeAttr',

  fields: () => ({
    acctgTransTypeId: {type: GraphQLString},
    attrName: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {AcctgTransTypeAttrInputType};
    