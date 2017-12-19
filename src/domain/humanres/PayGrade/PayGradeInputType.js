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

const PayGradeInputType = new GraphQLInputObjectType({
  name: 'PayGradeInputType',
  description: 'input type for PayGrade',

  fields: () => ({
    comments: {type: GraphQLString},
    payGradeId: {type: GraphQLString},
    payGradeName: {type: GraphQLString}
  })
});

export {PayGradeInputType};
    